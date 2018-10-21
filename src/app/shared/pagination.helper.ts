import parseLink from 'parse-link-header'

import { DEFAULT_PER_PAGE_ITEM_COUNT } from "./constants";

interface HttpLinkHeaderValue {
  rel : string;
  page : string;
  url : string;
  per_page? : string;
}

interface HttpLinkHeader {
  prev? : HttpLinkHeaderValue;
  next? : HttpLinkHeaderValue;
  first? : HttpLinkHeaderValue;
  last? : HttpLinkHeaderValue;
}

function getPageLinksObject (linkStr : string) : HttpLinkHeader { 
  return parseLink(linkStr);
}


function isLastPage(pageLinks : HttpLinkHeader) : boolean {
  return Object.keys(pageLinks).length === 2 &&
    (pageLinks.first !== undefined) && (pageLinks.prev !== undefined);
}

function getPerPageCount(pageLinks : HttpLinkHeader) {
  
  for(let prop in pageLinks) {
    const perPageCount = pageLinks[prop].per_page;
    if(perPageCount) {
      return perPageCount;
    }
  }
  return DEFAULT_PER_PAGE_ITEM_COUNT;
}

export function getPageCount(linkStr : string) : number {
  const pageLinks = getPageLinksObject(linkStr);

  if(!pageLinks) {
    return 0;
  }
  if(isLastPage(pageLinks)) {
    return parseInt(pageLinks.prev.page, 10) + 1;
  } else if(pageLinks.last) {
    return parseInt(pageLinks.last.page, 10)
  } else {
    return 0;
  }
}

export function getItemCount(linkStr : string) : number {
  const pageLinks = getPageLinksObject(linkStr);
  const perPageCount = getPerPageCount(pageLinks);
  const pageCount = getPageCount(linkStr);

  return perPageCount * pageCount;
}
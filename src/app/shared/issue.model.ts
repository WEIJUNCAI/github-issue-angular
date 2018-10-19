export interface User {
  login: string;
  avatar_url : string;
  [propName: string]: any;
}

export interface Label {
  id: number;
  name : string;
  color : string;
  [propName: string]: any;
}

export interface Issue {
  title: string;
  number: number;
  comments: number;
  created_at: string;
  closed_at?: string
  user: User;
  labels: Label[];
  [propName: string]: any;
}


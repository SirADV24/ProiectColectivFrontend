export interface SearchResult{
  id: number,
  text: string,
  user: SearchUser,
  creationDate: Date,
  likesNumber: number,
  commentsNumber: number;
}

export interface SearchUser{
  id: number,
  firstName: string,
  account: string,
}

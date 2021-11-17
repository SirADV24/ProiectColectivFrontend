import { User } from "./user.model";

export class Tweet{
  id : number = 0;
  text : string = "";
  user! : User;
  date: string = "";
  number_likes : number = 0;
  number_comments : number = 0; 
}
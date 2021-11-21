import { User } from './user.model';

export interface Tweet {
  id?: number,
  text: string,
  user: User,
  date: string,
  number_likes: number,
  number_comments: number,
}

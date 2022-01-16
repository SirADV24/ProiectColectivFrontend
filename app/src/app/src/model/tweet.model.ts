import { User } from './user.model';

export interface Tweet {
  id?: number,
  text: string,
  user: User,
  date: string,
  liked_by_user_ids: number[],
  number_comments: number,
}

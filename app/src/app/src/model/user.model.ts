export interface User{
  id? : number;
  account?: string,
  firstName: string,
  lastName: string,
  email?: string,
  phoneNumber?: number,
  creationDate?: Date,
  following?: User[],
  followers?: User[]
}

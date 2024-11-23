import { User } from ".";

export interface ResponseUser {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
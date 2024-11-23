import { Task } from "./";

export interface ResponseTask {
  todos: Task[];
  total: number;
  skip: number;
  limit: number;
}
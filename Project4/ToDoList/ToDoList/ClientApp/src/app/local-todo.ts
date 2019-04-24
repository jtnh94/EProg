import { ToDoTag } from "./to-do-tag";

export class LocalTodo {
  id: number;
  name: string;
  dueDate: Date;
  toDoTag: ToDoTag[];
  status: boolean;
}

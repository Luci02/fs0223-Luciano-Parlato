import { ITodo } from "./Itodo";

export class Todo implements ITodo {
  id?: number | undefined;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean, id?:number|undefined) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

}

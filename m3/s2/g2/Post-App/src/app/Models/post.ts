export class Post {

  id: number;
  title: string;
  body: string;
  active: boolean;

  constructor(
    id :number,
    title :string,
    body :string,
    active: boolean
  ){
    this.id = id;
    this.title = title;
    this.body = body;
    this.active = active;
  }

}

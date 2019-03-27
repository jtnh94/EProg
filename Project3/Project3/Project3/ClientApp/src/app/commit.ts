import { Author } from "./author";

export class Commit {
  author: Author;
  message: string;
  url: string;
  comment_count: number;
}

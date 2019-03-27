import { SearchInfo } from "./search-info";
import { User } from "./user";

export class UserSearchResults {
  info: SearchInfo;
  incomplete_results: boolean;
  items: User[];
}

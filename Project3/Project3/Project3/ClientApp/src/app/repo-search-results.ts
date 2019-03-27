import { Repository } from "./repository";
import { SearchInfo } from "./search-info";

export class RepoSearchResults {
  info: SearchInfo;
  incomplete_results: boolean;
  items: Repository[];
}

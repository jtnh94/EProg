import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserSearchResults } from '../user-search-results';
import { User } from '../user';
import { RepoService } from '../repo.service';
import { RepoSearchResults } from '../repo-search-results';
import { Repository } from '../repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: string;
  searchType: string;
  searchResultsForUser: User[];
  searchResultsForRepo: Repository[];
  loading: boolean = false;
  page: number = 1;
  searchFailed: boolean = false;
  constructor(private userService: UserService, private repoService: RepoService) { }

  ngOnInit() {
  }

  search() {
    if (this.searchType == "isUser") {
      this.searchFailed = false;
      this.searchResultsForRepo = [];
      this.searchForUsers();
    }
    else {
      this.searchType == "isRepo"
      this.searchFailed = false;
      this.searchResultsForUser = [];
      this.searchForRepos();
    }
  }

  searchForUsers() {
    this.loading = true;
    this.userService.searchForUsers(this.searchString, this.page)
      .subscribe((data: UserSearchResults) => { this.searchResultsForUser = data.items; this.loading = false; },
        (error: any) => { console.log(error); this.searchFailed = true; this.loading = false; });
  }

  searchForRepos() {
    this.loading = true;
    this.repoService.searchForRepos(this.searchString, this.page)
      .subscribe((data: RepoSearchResults) => { this.searchResultsForRepo = data.items; this.loading = false; },
        (error: any) => { console.log(error); this.searchFailed = true; this.loading = false; });
  }

  refreshUserResults() {
    this.userService.searchForUsers(this.searchString, this.page).subscribe((data: UserSearchResults) => this.searchResultsForUser = data.items)
  }

  refreshRepoResults() {
    this.repoService.searchForRepos(this.searchString, this.page).subscribe((data: RepoSearchResults) => this.searchResultsForRepo = data.items)
  }

  nextPageForUsers() {
    this.page = this.page + 1;
    this.refreshUserResults();
    window.scrollTo(500,0)
  }

  nextPageForRepos() {
    this.page = this.page + 1;
    this.refreshRepoResults();
    window.scrollTo(500, 0)
  }

  prevPageForUsers() {
    this.page--;
    this.refreshUserResults();
    window.scrollTo(500, 0)
  }

  prevPageForRepos() {
    this.page--;
    this.refreshRepoResults();
    window.scrollTo(500, 0)
  }
}

import { Component, OnInit } from '@angular/core';
import { RepoSearchResults } from '../repo-search-results';
import { UserSearchResults } from '../user-search-results';
import { UserService } from '../user.service';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-search-rolodex',
  templateUrl: './search-rolodex.component.html',
  styleUrls: ['./search-rolodex.component.css']
})
export class SearchRolodexComponent implements OnInit {


  constructor(private userService: UserService, private repoService: RepoService) { }

  ngOnInit() {
  }


}

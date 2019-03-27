import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';
import { Commit } from '../commit';
import { Author } from '../author';
import { User } from '../user';

@Component({
  selector: 'app-repository',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repo: Repository;
  @Input() commit: Commit;
  @Input() author: Author;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}

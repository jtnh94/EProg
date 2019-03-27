import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() repo: Repository;
  @Input() follower: User;

  constructor() { }

  ngOnInit() {
  }

}

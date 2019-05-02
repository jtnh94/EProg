import { Component, OnInit } from '@angular/core';
import { UserCreateService } from '../user-create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private userService: UserCreateService, private router: Router) { }

  ngOnInit() {
    
  }

  authenticateUser() {
    this.userService.loginUser(this.userName, this.password).subscribe(() => console.log(''));
  }
}


import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  repo: Repository;
  follower: User;
  constructor(private route: ActivatedRoute, private service: UserService, private repoService: RepoService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUser(String(params.get('login'))))
    ).subscribe((data: User) => {
      this.user = data;
      this.repoService.getRepos(data.login)
        .subscribe((data1: Repository) => { this.repo = data1; });
      });

    this.route.paramMap.pipe(
      switchMap((params1: ParamMap) =>
        this.service.getFollowers(String(params1.get('login'))))
    ).subscribe((data2: User) => {
      this.follower = data2;
    })
  }
}

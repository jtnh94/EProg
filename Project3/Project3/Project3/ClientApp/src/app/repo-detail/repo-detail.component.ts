import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RepoService } from '../repo.service';
import { Commit } from '../commit';
import { UserService } from '../user.service';
import { User } from '../user';
import { Author } from '../author';


@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  private repo: Repository;
  private user: User;
  private commit: Commit;
  private author: Author;
  constructor(private route: ActivatedRoute, private service: RepoService, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRepo(params.get('full_name'))))
      .subscribe((data: Repository) => {
        this.repo = data;
        this.userService.getUser(data.owner.login).subscribe((data1: User) => { this.user = data1; });
      });

    this.route.paramMap.pipe(
      switchMap((params1: ParamMap) =>
        this.service.getCommit(params1.get('full_name'))))
      .subscribe((data1: Commit) => {
        this.commit = data1;
      });
  }
}

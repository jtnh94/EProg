import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoSearchResults } from './repo-search-results';
import { Repository } from './repository';
import { Commit } from './commit';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  apiUrl: string = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  searchForRepos(searchString: string, page: number): Observable<RepoSearchResults> {
    var endpoint = `${this.apiUrl}/search/repositories?q=${searchString}&page=${page}&per_page=10`;
    return this.http.get<RepoSearchResults>(endpoint);
  }

  getRepos(login: string): Observable<Repository> {
    var endpoint = `${this.apiUrl}/users/${login}/repos`;
    return this.http.get<Repository>(endpoint);
  }

  getRepo(full_name: string): Observable<Repository> {
    var endpoint = `${this.apiUrl}/repos/${full_name}`;
    return this.http.get<Repository>(endpoint);
  }

  getCommit(full_name: string): Observable<Commit> {
    var endpoint = `${this.apiUrl}/repos/${full_name}/commits`;
    return this.http.get<Commit>(endpoint);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSearchResults } from './user-search-results';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  searchForUsers(searchString: string, page: number): Observable<UserSearchResults> {
    var endpoint = `${this.apiUrl}/search/users?q=${searchString}&page=${page}&per_page=10`;
    return this.http.get<UserSearchResults>(endpoint);
  }

  getUser(login: string): Observable<User> {
    var endpoint = `${this.apiUrl}/users/${login}`;
    return this.http.get<User>(endpoint);
  }

  getFollowers(login: string): Observable<User> {
    var endpoint = `${this.apiUrl}/users/${login}/followers`;
    return this.http.get<User>(endpoint);
  }

}

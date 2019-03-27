import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UserComponent } from './user/user.component';
import { SearchRolodexComponent } from './search-rolodex/search-rolodex.component';
import { SearchComponent } from './search/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UserComponent,
    SearchRolodexComponent,
    SearchComponent,
    RepositoriesComponent,
    UserDetailComponent,
    RepoDetailComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: 'users', component: SearchRolodexComponent },
      { path: 'repositories', component: RepositoriesComponent },
      { path: 'user/:login', component: UserDetailComponent },
      { path: 'repository/:full_name', component: RepoDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

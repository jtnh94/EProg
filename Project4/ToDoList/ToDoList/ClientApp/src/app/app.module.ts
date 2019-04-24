import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ToDoRolodexComponent } from './to-do-rolodex/to-do-rolodex.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateTodoComponent,
    ToDoRolodexComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ToDoRolodexComponent, pathMatch: 'full' },
      { path: 'todo/create', component: CreateTodoComponent },
      { path: 'todo/update/:id', component: CreateTodoComponent },
      { path: 'todolist', component: ToDoRolodexComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

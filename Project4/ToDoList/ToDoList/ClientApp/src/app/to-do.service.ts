import { Injectable } from '@angular/core';
import { LocalTodo } from './local-todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToDoTag } from './to-do-tag';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  createToDo(todo: LocalTodo): Observable<LocalTodo> {
    return this.http.post<LocalTodo>('api/todo', todo);
  }

  getToDoList(): Observable<LocalTodo[]> {
    return this.http.get<LocalTodo[]>('api/todo');
  }

  deleteCurrentToDo(toDoId: number): Observable<LocalTodo> {
    return this.http.delete<LocalTodo>(`api/todo/${toDoId}`);
  }

  getCurrentToDo(toDoId: number): Observable<LocalTodo> {
    return this.http.get <LocalTodo>(`api/todo/${toDoId}`)
  }

  updateToDo(todo: LocalTodo): Observable<LocalTodo> {
    return this.http.put<LocalTodo>(`api/todo/${todo.id}`, todo);
  }

  getTags(tag: ToDoTag[]): Observable<LocalTodo[]> {
    return this.http.get<LocalTodo[]>(`api/todo/tags?tags=${tag.toString()}`)
  }
}

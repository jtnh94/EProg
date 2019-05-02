import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { LocalTodo } from '../local-todo';
import * as moment from 'moment';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToDoTag } from '../to-do-tag';
import { WarningService } from '../warning.service';
import { WarningSetting } from '../warning-setting';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-to-do-rolodex',
  templateUrl: './to-do-rolodex.component.html',
  styleUrls: ['./to-do-rolodex.component.css']
})
export class ToDoRolodexComponent implements OnInit {

  toDoList: LocalTodo[];
  completedTodo: LocalTodo;
  ToDoTags: ToDoTag[];
  toDoToBeUpdated: LocalTodo;
  status: boolean = false;

  warnSettings: WarningSetting = {
    id: 0,
    warningDate: new Date(),
  }

  warningDate = new Date();
  date = moment().format();
  warningDay: number = 2;
  warningHour: number = 0;
  timeNow = moment().local().utc().format();

  sortType: number = 0;
  orderType: number = 0;

  tagFilter: ToDoTag[] = [];
  direction: boolean = false;

  constructor(private toDoService: ToDoService, private warningService: WarningService) { }

  ngOnInit() {
    this.setWarningTime();
    this.checkTodo();
    this.refreshToDoList();
  }

  deleteToDo(toDoId: number) {
    this.toDoService.deleteCurrentToDo(toDoId).subscribe(() => this.refreshToDoList());
  }

  editToDo(todo: LocalTodo) {
    this.toDoService.updateToDo(todo).subscribe((data: LocalTodo) => this.toDoToBeUpdated = data)
  }

  refreshToDoList() {
    this.toDoService.getToDoList().subscribe((data: LocalTodo[]) => this.toDoList = data)
  }

  setWarningTime() {
    var x = moment(this.warningDate).add(this.warningDay, 'day').add(this.warningHour, 'hours').utc().toDate();
    this.warnSettings.warningDate = x;
    this.warningService.setWarningTime(this.warnSettings).subscribe((data: WarningSetting) =>
      console.log('Warning Date Changed: ', this.warnSettings.warningDate));
    this.date = moment(x, moment.ISO_8601).format();
  }

  checkTodo() {

  }

  sortByDate() {
    this.direction = !this.direction;
    if (this.direction) this.toDoList.sort((a, b) => a.dueDate < b.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0);
    else this.toDoList.sort((a, b) => b.dueDate < a.dueDate ? -1 : a.dueDate > b.dueDate ? 1 : 0);
  }

  sortByTask() {
    this.direction = !this.direction;
    if (this.direction) this.toDoList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    else this.toDoList.sort((a, b) => b.name < a.name ? -1 : b.name > a.name ? 1 : 0);
  }

  filterItems() {
    if (this.tagFilter.length < 1) window.location.reload();
    else {
      this.toDoService.getTags(this.tagFilter).subscribe((data: LocalTodo[]) => this.toDoList = data);
      console.log('FILTERED: ', this.toDoList);
    }
  }

  completeTodo(item: LocalTodo) {
    this.completedTodo = item;
    this.completedTodo.status = true;
    this.toDoService.updateToDo(item).subscribe(() => console.log('updated status'));
  }
}

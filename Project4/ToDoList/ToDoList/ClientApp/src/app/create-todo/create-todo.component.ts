import { Component, OnInit } from '@angular/core';
import { LocalTodo } from '../local-todo';
import * as moment from 'moment';
import { ToDoService } from '../to-do.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToDoTag } from '../to-do-tag';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  dueTime: any = {
    "hour": 0,
    "minute": 0,
    "seconds": 0,
  }
  dueDate: any = {}

  toDo: LocalTodo = {
    id: 0,
    name: "",
    dueDate: new Date(),
    toDoTag: [],
    status: false
  };
  
    tags: any[] = [{"tag": "school" }, {"tag": "work" }, {"tag": "chore" }, {"tag": "errand" },
    {"tag": "important" }, {"tag": "short" }, {"tag": "long" }]

  tagsSelected: ToDoTag[] = [];

  constructor(private route: ActivatedRoute, private toDoService: ToDoService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.params;
    if (routeParams.id) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.toDoService.getCurrentToDo(Number(params.get('id'))))
      ).subscribe((data: LocalTodo) => this.populateForm(data));
    }
  }

  createTodo() {
    if (this.toDo.id) {
      this.toDoService.updateToDo(this.toDo).subscribe(() => console.log('YAY'));
    }
    else {
      var selectedCreateDate = new Date(this.dueDate.year, this.dueDate.month - 1, this.dueDate.day, this.dueTime.hour, this.dueTime.minute, 0, 0);
      var utcDate = moment(selectedCreateDate).utc();
      this.toDo.dueDate = utcDate.toDate();
      this.toDo.toDoTag = this.getSelectedTags();
      this.toDo.status = false;
      console.log(this.toDo);
      this.toDoService.createToDo(this.toDo).subscribe(() => console.log('created toDo'));
      
    }
  }

  populateForm(todo: LocalTodo) {
    this.toDo = todo;
    var momentInstance = moment.utc(this.toDo.dueDate).local();
    this.dueTime = {
      "hour": momentInstance.hour(),
      "minute": momentInstance.minute()
    }

    this.dueDate = {
      "month": momentInstance.month() + 1,
      "day": momentInstance.day() + 21,
      "year": momentInstance.year()
    }
  }

  getSelectedTags() {
    console.log(this.tagsSelected);
    var x = this.tagsSelected;
    return x;
  }
}

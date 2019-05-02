import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoRolodexComponent } from './to-do-rolodex.component';

describe('ToDoRolodexComponent', () => {
  let component: ToDoRolodexComponent;
  let fixture: ComponentFixture<ToDoRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

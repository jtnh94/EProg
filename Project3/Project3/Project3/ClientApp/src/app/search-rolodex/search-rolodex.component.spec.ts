import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRolodexComponent } from './search-rolodex.component';

describe('SearchRolodexComponent', () => {
  let component: SearchRolodexComponent;
  let fixture: ComponentFixture<SearchRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

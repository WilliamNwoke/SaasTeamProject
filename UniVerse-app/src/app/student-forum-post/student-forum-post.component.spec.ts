import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForumPostComponent } from './student-forum-post.component';

describe('StudentForumPostComponent', () => {
  let component: StudentForumPostComponent;
  let fixture: ComponentFixture<StudentForumPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentForumPostComponent]
    });
    fixture = TestBed.createComponent(StudentForumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

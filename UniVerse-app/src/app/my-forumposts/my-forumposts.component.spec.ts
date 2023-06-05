import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForumpostsComponent } from './my-forumposts.component';

describe('MyForumpostsComponent', () => {
  let component: MyForumpostsComponent;
  let fixture: ComponentFixture<MyForumpostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyForumpostsComponent]
    });
    fixture = TestBed.createComponent(MyForumpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationIndexPageComponent } from './notification-index-page.component';

describe('NotificationIndexPageComponent', () => {
  let component: NotificationIndexPageComponent;
  let fixture: ComponentFixture<NotificationIndexPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationIndexPageComponent]
    });
    fixture = TestBed.createComponent(NotificationIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

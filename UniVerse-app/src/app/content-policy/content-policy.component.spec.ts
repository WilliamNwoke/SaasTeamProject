import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPolicyComponent } from './content-policy.component';

describe('ContentPolicyComponent', () => {
  let component: ContentPolicyComponent;
  let fixture: ComponentFixture<ContentPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPolicyComponent]
    });
    fixture = TestBed.createComponent(ContentPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

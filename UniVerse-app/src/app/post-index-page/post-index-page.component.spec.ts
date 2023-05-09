import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIndexPageComponent } from './post-index-page.component';

describe('PostIndexPageComponent', () => {
  let component: PostIndexPageComponent;
  let fixture: ComponentFixture<PostIndexPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostIndexPageComponent]
    });
    fixture = TestBed.createComponent(PostIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

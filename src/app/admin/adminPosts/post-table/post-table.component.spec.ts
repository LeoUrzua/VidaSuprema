
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTableComponent } from './post-table.component';

describe('PostTableComponent', () => {
  let component: PostTableComponent;
  let fixture: ComponentFixture<PostTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

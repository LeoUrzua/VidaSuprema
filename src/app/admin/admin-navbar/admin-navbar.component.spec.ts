
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavbarComponent } from './admin-navbar.component';

describe('AdminNavbarComponent', () => {
  let component: AdminNavbarComponent;
  let fixture: ComponentFixture<AdminNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

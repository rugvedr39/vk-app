import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalUsersPage } from './total-users.page';

describe('TotalUsersPage', () => {
  let component: TotalUsersPage;
  let fixture: ComponentFixture<TotalUsersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

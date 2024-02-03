import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopAchiversPage } from './top-achivers.page';

describe('TopAchiversPage', () => {
  let component: TopAchiversPage;
  let fixture: ComponentFixture<TopAchiversPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopAchiversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

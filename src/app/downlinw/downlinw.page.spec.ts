import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownlinwPage } from './downlinw.page';

describe('DownlinwPage', () => {
  let component: DownlinwPage;
  let fixture: ComponentFixture<DownlinwPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DownlinwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

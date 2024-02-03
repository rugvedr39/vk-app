import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMIPage } from './emi.page';

describe('EMIPage', () => {
  let component: EMIPage;
  let fixture: ComponentFixture<EMIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EMIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

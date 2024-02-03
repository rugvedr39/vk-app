import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EPinsPage } from './e-pins.page';

describe('EPinsPage', () => {
  let component: EPinsPage;
  let fixture: ComponentFixture<EPinsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EPinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

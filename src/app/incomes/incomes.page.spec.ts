import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IncomesPage } from './incomes.page';

describe('IncomesPage', () => {
  let component: IncomesPage;
  let fixture: ComponentFixture<IncomesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

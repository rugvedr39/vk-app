import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPayoutPage } from './my-payout.page';

describe('MyPayoutPage', () => {
  let component: MyPayoutPage;
  let fixture: ComponentFixture<MyPayoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

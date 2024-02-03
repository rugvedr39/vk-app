import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {
  payments: any;
  constructor() { }

  ngOnInit(){
    this.payments = history.state.payments || [];
  }
}
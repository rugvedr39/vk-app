import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-payout',
  templateUrl: './my-payout.page.html',
  styleUrls: ['./my-payout.page.scss'],
})
export class MyPayoutPage implements OnInit {
  payments: any;

  constructor() { }

  ngOnInit() {
    this.payments = history.state.payments || [];}

  transformDateTime(value: string): string {
    const date = new Date(value);
    // Get day, month, and year components
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    // Pad single-digit day and month with leading zero
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    // Create the formatted date string in dd-mm-yyyy format
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return formattedDate;
  }

}

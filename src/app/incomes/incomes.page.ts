import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.page.html',
  styleUrls: ['./incomes.page.scss'],
})
export class IncomesPage implements OnInit {
  payments: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.payments = history.state.payments || [];
  }

  getTotalUsersByLevel(level: number) {
    return this.payments
      .filter((item: any) => item.level === level)
      .reduce((total:any, item: any) => total + item.amount, 0);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Paid':
        return 'table-success'; // Bootstrap class for success (green)
      case 'unpaid':
        return 'table-danger'; // Bootstrap class for danger (red)
      case 'Payment Under Process':
        return 'table-warning'; // Bootstrap class for warning (yellow)
      default:
        return '';
    }
  }
}

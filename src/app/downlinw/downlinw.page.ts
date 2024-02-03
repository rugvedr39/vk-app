import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downlinw',
  templateUrl: './downlinw.page.html',
  styleUrls: ['./downlinw.page.scss'],
})
export class DownlinwPage implements OnInit {
  user: any;

  constructor() {}

  ngOnInit() {
    this.user =  history.state.payments || [];}
  
  getTotalUsersByLevel(level: number) {
    return this.user.downline.filter((item:any) => item.level === level).length;
  }
}

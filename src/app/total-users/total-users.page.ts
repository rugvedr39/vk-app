import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.page.html',
  styleUrls: ['./total-users.page.scss'],
})
export class TotalUsersPage implements OnInit {
  data:any[] | undefined;
  loading: boolean=false;
  users: any;
  constructor(private http: HttpClient,) { 
    this.http.get(`${environment.backendUrl}users/get-all-users`).subscribe((response:any) =>{
      this.data=response.users;
      this.data?.splice(0, 2);
      for (let index = 0; index < this.data!.length; index++) {
        if (this.data![index].username == this.users) {
          console.log(index+1);
        }
      }
    })
  }
  ngOnInit() {
    this.users =  history.state.payments || []
  };
  }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-e-pins',
  templateUrl: './e-pins.page.html',
  styleUrls: ['./e-pins.page.scss'],
})
export class EPinsPage implements OnInit {
  user: any;
  pins: any;

  constructor(private http: HttpClient,private router: Router) { 
    const userData = localStorage.getItem('data');
    this.user = userData ? JSON.parse(userData) : null;
    this.http.get(`${environment.backendUrl}epins/${this.user.username}`).subscribe((response:any) => {
   this.pins=response.epins
    
    });
  }

  ngOnInit() {
  }

  createuser(arg0: any) {
    let obj ={
      sponserId:this.user.username,
      epin:arg0
    }
    this.router.navigate(['/signup'], { state: { payments: obj } });
    }

}

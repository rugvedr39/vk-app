import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-achivers',
  templateUrl: './top-achivers.page.html',
  styleUrls: ['./top-achivers.page.scss'],
})
export class TopAchiversPage implements OnInit {
  topUsers:any;
  constructor(private http:HttpClient) { 
    this.http.get(`${environment.backendUrl}topusers`).subscribe((response:any) => {
      this.topUsers= response.topUsers
    })
  }

  ngOnInit() {
    console.log('hh');
    
  }

  convertDriveLinkToImageSrc(googleDriveLink: string){
    // Extract the file ID from the Google Drive link
    const fileIdMatch = googleDriveLink.match(/\/file\/d\/(.+?)\//);

    if (fileIdMatch && fileIdMatch[1]) {
      // Construct the image source using the file ID
      return `https://drive.google.com/uc?id=${fileIdMatch[1]}`;
    }else{
      return ''
    }}

}

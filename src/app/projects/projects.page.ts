import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  data: any;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get(`${environment.backendUrl}projects/lands`).subscribe((data) => {
      this.data= data
      console.log(this.data);
    })
  }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

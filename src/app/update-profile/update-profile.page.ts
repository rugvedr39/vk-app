import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage  {

  updateForm: FormGroup;
  user: any;
  isLoading = false;
  accountNumber: any;
  ifscCode: any;
  bankName: any;

  constructor(private fb: FormBuilder,private router: Router,private http: HttpClient,) {
    this.imageUrl = ''; 
    const userData = localStorage.getItem('data');
    this.user = userData ? JSON.parse(userData) : null;
    this.updateForm = this.fb.group({
      password: ['',],bankDetails: []=[],
    });
    this.accountNumber= this.user.bankDetails?.accountNumber
    this.ifscCode= this.user.bankDetails?.ifscCode
    this.bankName= this.user.bankDetails?.bankName
    this.updateForm.patchValue({password:this.user.password})
    
    if (this.user==null) {
      router.navigate(['/login']);
    }
   }

  bankDeatils() {
    this.updateForm.value.bankDetails = {'accountNumber':this.accountNumber,'bankName':this.bankName,'ifscCode':this.ifscCode}
  }

  onUpdate() {
    this.bankDeatils();
    const url = `${environment.backendUrl}users/update/${this.user._id}`
    this.http.put(url,this.updateForm.value).subscribe((data:any) => {
      alert(data.message)
    })
  }
  selectedFile!: File;
  imageUrl: string;

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post<any>(`${environment.backendUrl}updateUser/upload/${this.user._id}`, formData)
      .subscribe(response => {
        console.log(response);
        
        if (response.success==true) {
          this.isLoading = false;
          alert("Profile Image Upload Successfully")
        }else{
          alert("Profile Image Upload Failed Please try again")
          this.isLoading = false;
        }
      });
  }

}

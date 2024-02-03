import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:any
  name:any

  private apiUrl = `${environment.backendUrl}users/create-user`;
  signupForm!: FormGroup;
  otherSourcedata: any;
  constructor(private fb: FormBuilder, private authService: AuthService,private http: HttpClient,private router: Router,private alertController: AlertController) { 
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      panNumber: ['', Validators.required],
      sponsorId: ['',],
      phoneNumber: ['', Validators.required],
      bankDetails: [[]],
      downline: [[]],
      email: ['', [Validators.required, Validators.email]],
      pin: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.otherSourcedata =  history.state.payments || [];
    if (this.otherSourcedata.length != 0) {
      this.signupForm.patchValue({
        pin: this.otherSourcedata.epin || '',
        sponsorId:this.otherSourcedata.sponserId || '',
      })
      this.checksponsername()
    }
  }

  isModalOpen = false;

  onSubmit() {
    if (this.signupForm.valid) {
      this.http.post(this.apiUrl, this.signupForm.value).subscribe(
        (response: any) => {
          if (response.success) {
            this.user=response.user
            this.presentAlert()
          } else {
            alert(response.data);
          }
        },
        (error) => {
          console.error(error);
          alert(error.error.message);
        }
      );
    }
  }

  done(){
    this.router.navigate(['/login']);
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Congratulations',
      subHeader: 'You have successfully created an account Please take a screenshot For Login',
      message: `Your userId is ${this.user.username} & Your password is: ${this.user.password}`,
      buttons: [
        {
          text: 'Login Your Account',
          handler: () => {
           this.done();
          },
        },
      ],
    });
  
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role === 'done') {
      this.done()
    }

    await alert.present();
  }

  checksponsername(){
    this.http.get(`${environment.backendUrl}users/users/${this.signupForm.get('sponsorId')?.value}`).subscribe((data:any) => {
      this.name = data.user.name
    })
    
  }
}

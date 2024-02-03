import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  user: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private route: ActivatedRoute) {
    const userData = localStorage.getItem('data');
    this.user = userData ? JSON.parse(userData) : null;
    if (this.user!=null) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }
   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Access the parameters here
      const param1 = params['username'];
      const param2 = params['params'];

      // Use the parameters as needed

      this.loginForm.setValue({
        username: param1,
        password: param2
      });
    });
   }


   onSubmit() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe((success) => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

}

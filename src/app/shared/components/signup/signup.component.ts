import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../auth-connector/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }


  private createForm(): void {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    });
  }

  public submit(): void {
    if (this.signupForm.valid) {

      const redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/products';

      this.authService.registerUser(this.signupForm.value).subscribe(authData => {
        if ( authData.user) {
          // sign up and login successful
          // redirect to current route | to products page
          this.router.navigateByUrl(redirectUrl);
        } else {
          // user already exists
        }
      });


    } else {
    console.log('error');
    }
  }

}

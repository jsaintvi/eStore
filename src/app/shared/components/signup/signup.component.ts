import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../auth-connector/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

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

      this.authService.registerUser(this.signupForm.value).subscribe(authData => {
        if ( authData.user) {
          // sign up and login successful
          // redirect to current route | to products page
        } else {
          // user already exists
        }
      });


    } else {
    console.log('error');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth-connector/services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const pwd = this.loginForm.value.password;

    const redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/products';
    this.authService.login(email, pwd).subscribe((authData) => {
      if ( authData.user) {
        // login was successful
        // redirect to products page or page they were viweing
        this.router.navigateByUrl(redirectUrl);
      } else {
        // failed to login
      }

    });

  }


}

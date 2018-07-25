import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth-connector/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoggedin: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedin = !!this.authService.userData ;
  }
}

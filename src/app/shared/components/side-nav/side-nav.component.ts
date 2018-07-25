import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../auth-connector/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public currentUser: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.currentUser = this.auth.userData;
  }

}

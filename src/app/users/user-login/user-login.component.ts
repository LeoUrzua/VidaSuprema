import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/users/auth.service';

@Component({
  selector: 'supreme-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/users/auth.service';

@Component({
  selector: 'supreme-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

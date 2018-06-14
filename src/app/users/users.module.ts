import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserBaseComponent } from './user-base/user-base.component';
import { SharedModule } from '../shared';
import { AuthService } from '@app/users/auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UserLoginComponent, UserBaseComponent],
  providers: [AuthService]
})
export class UsersModule { }

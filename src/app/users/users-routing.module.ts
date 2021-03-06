import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserBaseComponent } from './user-base/user-base.component';
import { UserProfileComponent } from '@app/users/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserBaseComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', redirectTo: 'logIn', pathMatch: 'full'},
          {path: 'profile', component: UserProfileComponent},
          {path: 'logIn', component: UserLoginComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

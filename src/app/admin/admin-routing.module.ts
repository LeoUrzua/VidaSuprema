import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from '@app/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from '@app/admin/admin-home/admin-home.component';
import { UsersComponent } from '@app/admin/adminUsers/users/users.component';
import { PostsComponent } from '@app/admin/adminPosts/posts/posts.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard]
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          { path: 'users', component: UsersComponent},
          { path: 'posts', component: PostsComponent},
          { path: 'dashboard', component: AdminDashboardComponent},
          // { path: '', component: AdminComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}

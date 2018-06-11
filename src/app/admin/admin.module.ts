import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
  MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersComponent } from '@app/admin/adminUsers/users/users.component';
import { UsersTableComponent } from './adminUsers/users-table/users-table.component';
import { PostTableComponent } from './adminPosts/post-table/post-table.component';
import { PostsComponent } from './adminPosts/posts/posts.component';
import { AdminPostFormComponent } from './adminPosts/admin-post-form/admin-post-form.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    UsersComponent,
    UsersTableComponent,
    PostTableComponent,
    PostsComponent,
    AdminPostFormComponent]
})
export class AdminModule { }

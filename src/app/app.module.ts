import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from '@app/general/general.module';
import { AdminModule } from '@app/admin/admin.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '@app/services/post.service';


import { AngularFireModule } from 'angularfire2';
import { environment } from '@env/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { UsersModule } from '@app/users/users.module';



@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,
    GeneralModule,
    AdminModule,
    UsersModule,

    // API
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features

    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router conf
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

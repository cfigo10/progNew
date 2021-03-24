import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AdminModule } from './components/admin.module';
import { ProfileModule } from './components/admin/profile/profile.module';
import { LoginComponent } from './auth/login/login.component';
import { LoginModule } from './components/auth/login/login.module';
import { AboutComponent } from './components/pages/about/about.component';
import { AboutModule } from './components/pages/about/about.module';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeModule } from './components/pages/home/home.module';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { ListPostsComponent } from './components/posts/list-posts/list-posts.component';
import { ListPostsModule } from './components/posts/list-posts/list-posts.module';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TableComponent } from './shared/components/table/table.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProfileComponent,
    LoginComponent,
    AboutComponent,
    ContainerAppComponent,
    HomeComponent,
    DetailsPostComponent,
    EditPostComponent,
    ListPostsComponent,
    NewPostComponent,
    PostComponent,
    ModalComponent,
    TableComponent,
    ToolbarComponent,
    MaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProfileModule,
    LoginModule,
    AboutModule,
    HomeModule,
    ListPostsModule,
    NewPostModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    StorageBucket,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    { provide: StorageBucket, useValue: 'gs//'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

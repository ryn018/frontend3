import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistrictComponent } from './district/district.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { ErnamkulamComponent } from './ernamkulam/ernamkulam.component';
import { IdukkiComponent } from './idukki/idukki.component';
import { KannurComponent } from './kannur/kannur.component';
import { KasaragodComponent } from './kasaragod/kasaragod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { MalappuramComponent } from './malappuram/malappuram.component';
import { PalakkadComponent } from './palakkad/palakkad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { ThiruvanthapuramComponent } from './thiruvanthapuram/thiruvanthapuram.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { TripthrissurComponent } from './tripthrissur/tripthrissur.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PostService } from './services/post.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { MypostsComponent } from './posts/myposts/myposts.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistrictComponent,
    AlappuzhaComponent,
    ErnamkulamComponent,
    IdukkiComponent,
    KannurComponent,
    KasaragodComponent,
    KollamComponent,
    KottayamComponent,
    KozhikodeComponent,
    MalappuramComponent,
    PalakkadComponent,
    PathanamthittaComponent,
    ThiruvanthapuramComponent,
    ThrissurComponent,
    WayanadComponent,
    HomeComponent,
    TripthrissurComponent,
    PlanComponent,
    PostListComponent,
    CreatePostComponent,
    SpinnerComponent,
    PostDetailComponent,
    LoginComponent,
    MypostsComponent,
    CreateProfileComponent,
    ViewProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService,
    AuthService,AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

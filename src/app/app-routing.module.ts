import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { MypostsComponent } from './posts/myposts/myposts.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
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
import { WayanadComponent } from './wayanad/wayanad.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { TripthrissurComponent } from './tripthrissur/tripthrissur.component';





const routes: Routes = [
  { path: 'review', component: PostListComponent },
  { path: 'district', component:DistrictComponent},
  { path: 'alappuzha', component:AlappuzhaComponent},
  { path: 'ernakulam', component:ErnamkulamComponent},
  { path: 'idukki', component:IdukkiComponent},
  { path: 'kannur', component:KannurComponent},
  { path: 'kasaragod', component:KasaragodComponent},
  { path: 'kollam', component:KollamComponent},
  { path: 'kottayam', component:KottayamComponent},
  { path: 'kozhikode', component:KozhikodeComponent},
  { path: 'malappuram', component:MalappuramComponent},
  { path: 'palakkad', component:PalakkadComponent},
  { path: 'plan' , component:PlanComponent},
  { path: 'tripthrissur' , component:TripthrissurComponent},
  { path: 'thiruvanthapuram', component:ThiruvanthapuramComponent},
  { path: 'thrissur', component:ThrissurComponent},
  { path: 'pathanamthitta', component:PathanamthittaComponent},
  { path: 'wayanad', component:WayanadComponent},
  { path: '', component:HomeComponent},
  { path: 'myposts', component: MypostsComponent ,canActivate: [AuthGuard]},
  { path: 'create', component: CreatePostComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'myposts/:postId', component: PostDetailComponent ,canActivate: [AuthGuard]},
  { path: 'myposts/edit/:postId', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: CreateProfileComponent,canActivate: [AuthGuard] },
  { path: 'public/:profileId', component: ViewProfileComponent },
  { path: 'profile/:profileId', component: ViewProfileComponent,canActivate: [AuthGuard]  },
  { path: 'profile/edit/:profileId', component: CreateProfileComponent,canActivate: [AuthGuard]  },
  { path: 'public/:profileId/posts/:postId', component: PostDetailComponent },
  { path: ':postId', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

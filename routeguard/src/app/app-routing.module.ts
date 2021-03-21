import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './share/auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"post",
    component:PostComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"users",
    component:UsersComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"logout",
    component:LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

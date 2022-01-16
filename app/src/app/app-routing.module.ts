import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './src/containers/home-page/home-page.component';
import { LoginPageComponent } from './src/containers/login-page/login-page.component';
import { ProfilePageComponent } from './src/containers/profile-page/profile-page.component';
import { RegisterPageComponent } from './src/containers/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'profile/:id',
    component: ProfilePageComponent,
    data: {
      reuseComponent: false
    }
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

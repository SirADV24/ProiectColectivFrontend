import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './src/containers/home-page/home-page.component';
import { LoginPageComponent } from './src/containers/login-page/login-page.component';
import { RegisterPageComponent } from './src/containers/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent, // TODO: Maybe change this later on
  },
  {
    path: 'home',
    component: HomePageComponent,
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

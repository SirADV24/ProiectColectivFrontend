import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './src/components/login-component/login-component.component';
import { LoginPageComponent } from './src/containers/login-page/login-page.component';
import { UserService } from './src/services/user.service';
import { HomePageComponent } from './src/containers/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

const MATERIAL = [MatCardModule];

const PAGES = [LoginPageComponent, HomePageComponent];

const COMPONENTS = [LoginComponentComponent];

const SERVICES = [UserService];

@NgModule({
  declarations: [AppComponent, PAGES, COMPONENTS],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MATERIAL],
  providers: [SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {}

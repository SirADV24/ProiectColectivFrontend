import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponentComponent } from './src/components/login-component/login-component.component';
import { LoginPageComponent } from './src/containers/login-page/login-page.component';
import { UserService } from './src/services/user.service';
import { TweetService } from './src/services/tweet.service';
import { HomePageComponent } from './src/containers/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatBadgeModule } from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CreateTweetComponentComponent } from './src/components/create-tweet-component/create-tweet-component.component';
import { TweetComponent } from './src/components/tweet/tweet.component';
import { RegisterComponentComponent } from './src/components/register-component/register-component.component';
import { RegisterPageComponent } from './src/containers/register-page/register-page.component';
import { SidenavComponent } from './src/containers/sidenav/sidenav.component';
import { TweetFeedComponent } from './src/containers/tweet-feed/tweet-feed.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfilePageComponent } from './src/containers/profile-page/profile-page.component';
import { ProfileComponent } from './src/components/profile/profile.component';
import { LikeService } from './src/services/like.service';
import { SearchUserComponent } from './src/components/search-user/search-user.component';
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SearchService} from "./src/services/search.service";
import { UserProfileComponent } from './src/components/user-profile-component/user-profile-component.component';
import { CommonModule } from '@angular/common';

const MODULES = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatCardModule,
  MatProgressBarModule,
  MatSortModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatChipsModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatBadgeModule,
  DragDropModule,
  MatExpansionModule,
  MatGridListModule,
  NgxMatSelectSearchModule
  ];

const PAGES = [
  LoginPageComponent,
  HomePageComponent,
  RegisterPageComponent,
  SidenavComponent,
];

const COMPONENTS = [
  LoginComponentComponent,
  CreateTweetComponentComponent,
  UserProfileComponent,
  RegisterComponentComponent,
  TweetFeedComponent,
  TweetComponent,
  ProfilePageComponent
];

const SERVICES = [UserService, TweetService, LikeService, SearchService];

@NgModule({
  declarations: [AppComponent, PAGES, COMPONENTS, ProfileComponent, SearchUserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    CommonModule,
    MODULES,
    MatAutocompleteModule,
  ],
  exports: [MODULES],
  providers: [SERVICES, MODULES],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

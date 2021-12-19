import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../../components/user-profile-component/user-profile-component.component';
import { User } from '../../model/user.model';
import {SearchService} from "../../services/search.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {SearchResult} from "../../model/search-result.model";

@UntilDestroy()
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  user: User;
  searchResult: SearchResult[];

  constructor(public dialog: MatDialog, private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    this.user = { firstName: 'Marinescu', lastName: 'Iulian', account: 'newAccount', email:'iulianut@gmail.com', phoneNumber: 77700343 };
  }

  logout(): void {
    this.router.navigate(['/login']);
    // needs to be implemented
  }

  openUserDetails(): void {
    const dialogData = {
      user: this.user,
    };
    this.dialog.open(UserProfileComponent,
      {
        data: dialogData,
        width: '850px',
        height: '440px',
        panelClass: 'user-profile-container',
      });
  }

  getSearchResult(searchText: string){
    this.searchService.getSearchResult(searchText).pipe(
      untilDestroyed(this),
      tap((result: SearchResult[]) =>
        this.searchResult = result
      )
    ).subscribe()
  }

  goHome(){
    this.router.navigate(['/home']);
  }
}

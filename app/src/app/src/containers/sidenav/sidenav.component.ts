import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../../components/user-profile-component/user-profile-component.component';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  user: User;

  constructor(public dialog: MatDialog, private router: Router) {}

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
}

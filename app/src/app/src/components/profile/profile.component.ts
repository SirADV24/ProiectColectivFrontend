import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser()
      .subscribe((res) => {
        console.log(res);
        this.user = res;
      });
  }
}

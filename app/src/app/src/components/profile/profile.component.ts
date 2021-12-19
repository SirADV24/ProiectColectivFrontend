import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  currentUser: User;
  userId: number;
  loading: boolean = false;

  constructor(private userService : UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap((params) => {
        this.userId = +params.id
        this.loading = true;
        this.getUser();
      })
    ).subscribe();

    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  getUser(){
    this.userService.getUserAccount(this.userId)
      .subscribe((res) => {
        this.user = res;
        this.loading = false;
      });
  }

  goBack() {
    this.router.navigate(["home"]);
  }

  follow(){
    this.userService.followUser(this.userId)
      .pipe(
        tap((x) => {
          console.log(x)
        })
      )
      .subscribe();
  }

  isFollowing(){
    return this.currentUser?.following.some((x) => x.id === this.userId);
  }
}

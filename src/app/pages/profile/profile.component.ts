import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public goal: number;
  public currentUser: User = undefined;
  public user: User;
  constructor(private router: Router, private userServ: UserService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  updateUser() {
    if (this.goal == 0 || this.goal == null) {this.goal = this.currentUser.goal}
    let u = new User(this.currentUser.id, this.currentUser.firstname, this.currentUser.lastname, this.currentUser.username, this.currentUser.password, this.currentUser.email, this.goal);
    this.userServ.updateUser(u).subscribe(
      (response: User) => {
        this.user = response;
      }
    )
    sessionStorage.setItem("currentUser", JSON.stringify(u));
    this.wait(1000);
    this.router.navigateByUrl("/userhome");
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  back() {
    this.router.navigateByUrl("/userhome")
  }
}

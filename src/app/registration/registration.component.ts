import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  public fName: string;
  public lName: string;
  public username: string;
  public password: string;
  public vPassword: string;
  public email: string;
  public goal: number;
  public show: boolean = false;
  public users: User[];
  constructor(private router: Router, private userServ: UserService) { }
  ngOnInit(): void {
  }
  /*
    Sending user that registered using the form.
  */
  sendUser() {
    let u = new User(0, this.fName, this.lName, this.username, this.password, this.email, 0);
    this.userServ.addUser(u).subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }

  /*
    Sets delay to show user the login success message alert.
  */
  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  loginPage(): void {
    this.router.navigateByUrl("/login")
  }

  dispAlert() {
    this.show = true;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public users: User[];
  constructor(private router: Router, private user: UserService) { }
  ngOnInit() {
    this.getUsers();
   }

  getUsers() {
    this.user.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    )
  }
  
  loginPage(): void {
    this.router.navigateByUrl("/login")
  }
}

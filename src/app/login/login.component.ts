import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public show: Boolean = false;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  async sendLogin() {
    try{
      let user = await this.http.post<User>('http://localhost:8080/FitBuddy/login', {
        username: this.username,
        password: this.password,
      }, ).toPromise();
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      if (user.username != null) {
        this.wait(1000);
        this.userhomePage();
      } 
      
    } catch(error) {
      this.show = true;
    }
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 loginPage(): void {
   this.router.navigateByUrl("/login");
 }

  userhomePage(): void {
    this.router.navigateByUrl("/userhome");
  }

  registrationPage(): void {
    this.router.navigateByUrl("/registration");
  }
}
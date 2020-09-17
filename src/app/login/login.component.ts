import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public show: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // async sendLogin(): Promise<void> {
  //   try {
  //     // This gets the user object
  //     let user = await this.http.post<User>('http://ec2-18-206-232-8.compute-1.amazonaws.com:8085/ReimburseWiz/login', {
  //         username: this.username,
  //         password: this.password,
  //       }, {
  //       withCredentials: true // cookie
  //     }).toPromise();
  //     sessionStorage.setItem("currentUser", JSON.stringify(user));
  //     this.wait(1000);
  //     this.router.navigateByUrl("/manager");
  //   } catch(error) {
  //     // Failed to login
  //     // console.log(error);
  //     alert("Failed to login");
  //   }
  // }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  userhomePage(): void {
    this.router.navigateByUrl("/userhome");
  }

  registrationPage(): void {
    this.router.navigateByUrl("/registration");
  }

  dispAlert() {
    this.show = true;
  }
}
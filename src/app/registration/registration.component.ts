import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public fName: string = "";
  public lName: string = "";
  public username: string = "";
  public password: string = "";
  public vPassword: string = "";
  public email: string = "";
  public show: boolean = false;
  constructor(private router: Router) { }

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
  }

  loginPage(): void {
    this.router.navigateByUrl("/login")
  }
  dispAlert() {
    this.show = true;
  } 

  ngOnInit(): void {
  }


}

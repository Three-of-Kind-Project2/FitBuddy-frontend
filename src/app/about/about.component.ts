import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  myresponse: any;
  readonly APP_URL = 'http://localhost:8080/FitBuddy';
  getAllUsers() {
    this.http.get(this.APP_URL + '/getusers').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  ngOnInit(): void {
  }

  loginPage(): void {
    this.router.navigateByUrl("/login")
  }
}

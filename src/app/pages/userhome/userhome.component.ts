import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public currentUser: User = undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  searchPage(): void {
    this.router.navigateByUrl("/search");
  }
  
  logout(): void {
    sessionStorage.removeItem("currentUser");
    this.router.navigateByUrl("/home")
  }

  formPage(): void {
    this.router.navigateByUrl("/form");
  }

  tablePage(): void {
    this.router.navigateByUrl("/table");
  }

  mapPage(): void {
    this.router.navigateByUrl("/map");
  }
}

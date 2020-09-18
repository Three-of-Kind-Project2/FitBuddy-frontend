import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchPage(): void {
    this.router.navigateByUrl("/search");
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

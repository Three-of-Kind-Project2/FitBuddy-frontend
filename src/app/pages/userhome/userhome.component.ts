import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { User } from 'src/app/models/user';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public currentUser: User = undefined;
  public foods: Food[];

  constructor(private router: Router, private foodService: FoodService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  // getFood() {
  //   this.foodService.getAllTrainers().subscribe(
  //     (response: Food[]) => {
  //       this.trainers = response;
  //     }
  //   )
  // }


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

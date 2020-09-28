import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public currentUser: User = undefined;
  public user: User;
  // public combine: combine[]; 
  public foods: Food[];
  public meals: Meal[];
  constructor(private router: Router, private foodService: FoodService) { }
  combinedArray: { foods: any, meals: any }[] = [];
  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    // this.getFood();
    this.getFoodById();
  }

  removeAll() {
    this.user = this.currentUser;
    this.foodService.removeAllFoods(this.user).subscribe (
    )
    window.location.reload();
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  getFoodById() {
    this.user = this.currentUser;
    this.foodService.getAllFoodByUserId(this.user.id).subscribe (
      (response:Food[]) => {
        this.foods = response;
      }
    )
  }
  getMeal() {
    this.foodService.getAllMeals().subscribe(
      (response: Meal[]) => {
        this.meals = response;
      }
    )
  }

  // getFood() {
  //   this.foodService.getAllFoods().subscribe(
  //     (response: Food[]) => {
  //       this.foods = response;
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

  profile(): void {
    this.router.navigateByUrl("/profile");
  }
}

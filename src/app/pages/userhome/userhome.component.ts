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
  public foods: Food[];
  public meals: Meal[];

  constructor(private router: Router, private foodService: FoodService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    this.getMeal();
    this.getFood();
  }

  getMeal() {
    this.foodService.getAllMeals().subscribe(
      (response: Meal[]) => {
        this.meals = response;
      }
    )
  }

  getFood() {
    this.foodService.getAllFoods().subscribe(
      (response: Food[]) => {
        this.foods = response;
      }
    )
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

  profile(): void {
    this.router.navigateByUrl("/profile");
  }
}

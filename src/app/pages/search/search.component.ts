import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionixServiceService } from '../../services/nutritionix-service.service';
import { Food } from '../../models/food'
import { Meal } from '../../models/meal';
import { FoodService } from '../../services/food.service'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NutritionixServiceService]
})

export class SearchComponent implements OnInit {
  @Input() food;
  public recipeInput: string;
  public foods = [];
  public foodSubscription;
  public responseFood: Food[];
  public responseMeal: Meal[];
  public type: string;
  public currentUser: User = undefined;
  constructor(private router: Router, private nutrixService: NutritionixServiceService, private foodService: FoodService) { }


  sendMeal() {
    let m = new Meal (0, null, this.type, this.currentUser.id)
    console.log(this.currentUser);
    console.log(m);
    this.foodService.addMeal(m).subscribe(
      (response: Meal[]) => {
        this.responseMeal = response;
      }
    )
  }

  sendFood() {
    let f = new Food(0, this.foods[0].name, this.foods[0].photo, this.foods[0].calories, this.foods[0].carbs, this.foods[0].protein, this.foods[0].fat, null);
    console.log(f);
    this.foodService.addFood(f).subscribe(
      (response: Food[]) => {
        this.responseFood = response;
      }
    )
  }

  onSubmitForm($event) {
    event.preventDefault();
    const recipe = this.recipeInput;
    this.recipeInput = '';
    this.nutrixService.getParsedRecipe(recipe);
  }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    this.foods = this.nutrixService.getFoods();
    this.foodSubscription = this.nutrixService.foodsChanged.subscribe(() => {
    this.foods = this.nutrixService.getFoods();
    });
  }
}

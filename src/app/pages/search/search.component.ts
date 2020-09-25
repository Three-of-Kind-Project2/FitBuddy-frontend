import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionixServiceService } from '../../services/nutritionix-service.service';
import { Food } from '../../models/food'
import { Meal } from 'src/app/models/meal';
import { FoodService } from '../../services/food.service'

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

  constructor(private router: Router, private nutrixService: NutritionixServiceService, private foodService: FoodService) { }
  public food_id: number;
  public name: string;
  public url: string;
  public calories: number;
  public carbs: number;
  public protein: number;
  public fat: number;
  public meal: Array<Meal>;

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
    this.foods = this.nutrixService.getFoods();
    this.foodSubscription = this.nutrixService.foodsChanged.subscribe(() => {
    this.foods = this.nutrixService.getFoods();
    });
  }
}

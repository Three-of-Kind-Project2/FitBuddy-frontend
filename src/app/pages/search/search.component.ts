import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionixServiceService } from '../../nutritionix-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NutritionixServiceService]
})

export class SearchComponent implements OnInit {
  @Input() food;
  recipeInput: string;
  foods = [];
  foodSubscription;
  constructor(private router: Router, private nutrixService: NutritionixServiceService) { }

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

import { Meal } from './meal';

export class Food {
    public food_id: number;
    public name: string;
    public url: string;
    public calories: number;
    public carbs: number;
    public protein: number;
    public fat: number;
    public meal_id: number;
    constructor(
        food_id: number,
        name: string,
        url: string,
        calories: number,
        carbs: number,
        protein: number,
        fat: number,
        meal_id: number
        ) {
        this.food_id = food_id;
        this.name = name;
        this.url = url;
        this.calories = calories;
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.meal_id = meal_id;
    }
}

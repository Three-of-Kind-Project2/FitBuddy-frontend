import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl: string = 'http://localhost:8080/FitBuddy';
  
  constructor(private http: HttpClient) { }
  addFood(f: Food): Observable<Food[]> {
    return this.http.post<Food[]>(this.baseUrl + '/log', f);
  }
}

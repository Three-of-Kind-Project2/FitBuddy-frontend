import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:8080/FitBuddy";

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "/users");
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + "/users/" + id);
  }

  addUser(u: User): Observable<User[]> {
    console.log(u);
    return this.http.post<User[]>(this.baseUrl + "/users", u);
  }
}

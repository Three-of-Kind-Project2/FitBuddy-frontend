import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.url + ':' + environment.port + '/FitBuddy';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users/' + id);
  }

  addUser(u: User): Observable<User[]> {
    return this.http.post<User[]>(this.baseUrl + '/users', u);
  }

  updateUser(u: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/update', u);
  }
}
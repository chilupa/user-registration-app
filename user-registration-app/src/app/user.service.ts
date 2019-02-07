import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private signUpUrl = 'http://localhost:8080/signup';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private user: User) { }

  signUpUser(user: User): Observable<User> {
    console.log('****************\nIn user service!\n****************');
    return this.http.post<User>(this.signUpUrl, this.user, this.httpOptions);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { User } from '../../shared/models/user';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  role = new BehaviorSubject<string>("");

  constructor(private _httpClient: HttpClient) { }
  getRole(){
    if (localStorage.getItem("token") != null) {
      this.role.next(decode(localStorage.getItem("token"))["Role"]);
    }else{
      this.role.next("");
    }
  }

  userUrl = "https://localhost:44374/api/User";

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>(this.userUrl + "/authenticate", userLogin);
  }

  logOut(){
    localStorage.removeItem("token");
    this.role.next("");
  }
}

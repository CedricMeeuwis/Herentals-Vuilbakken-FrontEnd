import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) { }

  userUrl = "https://localhost:44374/api/User";

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>(this.userUrl + "/authenticate", userLogin);
  }

  logOut(){
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  }
}

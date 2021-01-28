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

  userUrl = "https://cit-app-service.azurewebsites.net/api/User";

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>(this.userUrl + "/authenticate", userLogin);
  }
  userChange(user: User): Observable<User>{
    return this._httpClient.put<User>(this.userUrl + "/" + user.userID, user);
  }
  getUser(id: number){
    return this._httpClient.get<User>(this.userUrl + "/" + id);
  }
  isAdmin(){
    if(localStorage.getItem("token") != null && decode(localStorage.getItem("token"))["Role"] == "Admin"){
      return true;
    }
    return false;
  }
  isOphaler(){
    if(localStorage.getItem("token") != null && decode(localStorage.getItem("token"))["Role"] == "Ophaler"){
      return true;
    }
    return false;
  }
  isLoggedIn(){
    if(localStorage.getItem("token") != null){
      return true;
    }
    return false;
  }
  isGroendienst(){
    if(localStorage.getItem("token") != null && decode(localStorage.getItem("token"))["Role"] == "Groendienst"){
      return true;
    }
    return false;
  }
  logOut(){
    localStorage.removeItem("token");
    this.role.next("");
  }
}

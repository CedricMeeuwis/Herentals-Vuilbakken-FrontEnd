import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user';
import { Role } from '../shared/models/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>(null);

  constructor(private _httpClient: HttpClient) { }

  userUrl = "https://cit-app-service.azurewebsites.net/api/User";

  getUsers(id: number): Observable<User[]>{
    let output = this._httpClient.get<User[]>(this.userUrl + "/All/" + id);
    this.refresh(output);
    return output;
  }
  getUser(id: number): Observable<User>{
    return this._httpClient.get<User>(this.userUrl + "/" + id);
  }
  newUser(user: User): Observable<User>{
    return this._httpClient.post<User>(this.userUrl, user);
  }
  changeUser(user: User): Observable<User>{
    user.wachtwoord = null;
    return this._httpClient.put<User>(this.userUrl + "/" + user.userID, user);
  }
  deleteUser(id: number): Observable<User>{
    return this._httpClient.delete<User>(this.userUrl + "/" + id);
  }
  getAllRoles(): Observable<Role[]>{
    return this._httpClient.get<Role[]>("https://cit-app-service.azurewebsites.net/api/Role");
  }
  private refresh(output){
    output.subscribe(val =>{
      this.users.next(val);
    });
  }
}

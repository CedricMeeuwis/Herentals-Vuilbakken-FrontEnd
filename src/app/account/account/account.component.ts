import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { AuthenticateService } from '../../login/services/authenticate.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser: User;
  role = "";
  constructor(private router: Router, private _authenticateService: AuthenticateService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != null){
      var data = decode(localStorage.getItem("token"));
      this.currentUser = new User(data["Username"], "", data["UserID"]);
      this.role = data["Role"];
    }else{
      this.router.navigate(['/login']);
    }
  }
  logOut(){
    this._authenticateService.logOut();
    this.router.navigate(['/']);
  }
  changeWacht(){
    this.router.navigate(['/wachtVerandering']);
  }
}

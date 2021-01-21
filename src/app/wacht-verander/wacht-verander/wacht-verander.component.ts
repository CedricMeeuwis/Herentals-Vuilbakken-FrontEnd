import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { User } from '../../shared/models/user';
import { UserLogin } from '../../login/models/user-login';
import { AuthenticateService } from '../../login/services/authenticate.service';

@Component({
  selector: 'app-wacht-verander',
  templateUrl: './wacht-verander.component.html',
  styleUrls: ['./wacht-verander.component.scss']
})
export class WachtVeranderComponent implements OnInit {
  currentUser: User;
  nieuwWW = "";
  WWOpnieuw = "";
  errorMessage = "";
  constructor(private router: Router, private _authenticateService: AuthenticateService) { }
  ngOnInit(): void {
    if(localStorage.getItem("token") != null){
      var id = decode(localStorage.getItem("token"))["UserID"];
      this._authenticateService.getUser(id).subscribe(val =>{
        this.currentUser = val;
        this.currentUser.wachtwoord = "";
      });
    }else{
      this.router.navigate(['/login']);
    }
  }
  onSubmit(){
    var userLogin = new UserLogin(this.currentUser.username, this.currentUser.wachtwoord);
    this._authenticateService.authenticate(userLogin).subscribe(e =>{
      this.currentUser.wachtwoord = this.nieuwWW;
      this._authenticateService.userChange(this.currentUser).subscribe(f =>{
        this._authenticateService.logOut();
        this.router.navigate(["/login"]);
      });
    }, error =>{
      this.errorMessage = "Foutief oud wachtwoord ingegeven!";
    });
  }
}

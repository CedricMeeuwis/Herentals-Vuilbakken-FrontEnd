import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin : UserLogin = new UserLogin('', '');
  errorMessage = "";

  constructor(private _authenticateService : AuthenticateService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.errorMessage = "";
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/']);
    }, error => {
      this.errorMessage = "Login attempt failed";
    });
  }
}

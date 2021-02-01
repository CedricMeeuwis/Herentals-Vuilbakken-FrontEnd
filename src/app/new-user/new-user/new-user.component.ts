import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { Role } from '../../shared/models/role';
import { UserService } from '../../user-manage/user.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  allRoles: Role[];
  newUser: User = new User('','', 1 );

  mijnRol = "";
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.mijnRol = decode(localStorage.getItem('token'))['Role'];
      this._userService.getAllRoles().subscribe(val => {
        this.allRoles = val;
      });
    }else{
      this.router.navigate(['/login']);
    }
  }
  makeNew(){
    //Check voor breach
    if(this.newUser.username != ""
    && this.newUser.wachtwoord != ""
    && this.newUser.roleID != null){
      this._userService.newUser(this.newUser).subscribe(e =>{
        this.router.navigate(["/gebruikers"]);
      });
    }
  }
  terug(){
    this.router.navigate(["/gebruikers"]);
  }
}

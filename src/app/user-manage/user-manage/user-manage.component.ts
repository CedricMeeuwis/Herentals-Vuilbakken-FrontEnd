import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { Role } from '../../shared/models/role';
import  {NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  displayedColumns: string[] = ['username', 'role', 'edit', 'delete'];
  mijnUsers: User[];
  allRoles: Role[];
  mijnId: number;

  selectedUser: User;
  confirmDelete = "";

  mijnRol = "";
  constructor(private _userService: UserService, private router: Router, private modalService: NgbModal) { 
    _userService.users.subscribe(val => {
      this.mijnUsers = val;
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    {
      this.mijnId = decode(localStorage.getItem("token"))["UserID"];
      this.mijnRol = decode(localStorage.getItem("token"))["Role"];
      this._userService.getUsers(this.mijnId);
    }else
    {
      this.router.navigate(["/login"]);
    }
  }
  deleteUser(){
    if(this.confirmDelete == this.selectedUser.username){
      this._userService.deleteUser(this.selectedUser.userID).subscribe(e => {
        this._userService.getUsers(this.mijnId).subscribe();
      });
      this.confirmDelete = "";
      this.modalService.dismissAll();
    }
  }
  updateUser(){
    this._userService.changeUser(this.selectedUser).subscribe(e => {
      this._userService.getUsers(this.mijnId).subscribe();
    });
    this.modalService.dismissAll();
  }
  open(content, user){
    this._userService.getAllRoles().subscribe(val => {
      this.allRoles = val;
    });
    this.selectedUser = user;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  close(){
    this.confirmDelete = "";
    this.modalService.dismissAll();
  }
  navigateNieuw(){
    this.router.navigate(['/nieuwe-gebruiker']);
  }
}

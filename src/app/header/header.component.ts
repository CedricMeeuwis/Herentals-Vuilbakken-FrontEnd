import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../login/services/authenticate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  overlayOn = false;
  myRole = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthenticateService
  ) {
    _authService.role.subscribe(val => {
      this.myRole = val;
    });
  }

  ngOnInit(): void {
    if(window.innerWidth < 992){
      this.isMobile = true;
    }
    this._authService.getRole();

  }
  clickLink(){
    this.overlayOn = false;
  }
  changeOverlay(){
    this.overlayOn = !this.overlayOn;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 992){
      this.isMobile = true;
    }else{
      this.isMobile = false;
    }
  }
}

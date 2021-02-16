import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { AuthenticateService } from '../login/services/authenticate.service';
import { Enquete } from '../shared/models/enquete';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  overlayOn = false;
  myRole = "";
  enquetes: Enquete[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthenticateService,
    private _enqueteService: EnqueteService,
  ) {
    _authService.role.subscribe(val => {
      this.myRole = val;
    });
    
    this.getEnquetes();
  }

  getEnquetes(){
    this._enqueteService.getActiveEnquete().subscribe(result =>{
      this.enquetes=result;
    });

  }

  openEnquete(id: number){
    this.router.navigate(["/enquete", id]);
  }

  logout(){
    this._authService.logOut();
    this.router.navigate(['/']);
  }


  ngOnInit(): void {
    if(window.innerWidth < 992){
      this.isMobile = true;
    }
    this._authService.getRole();

    this.getEnquetes();

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

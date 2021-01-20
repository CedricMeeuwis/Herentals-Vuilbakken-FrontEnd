import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  overlayOn = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(window.innerWidth < 992){
      this.isMobile = true;
    }
  }
  changeOverlay(){
    this.overlayOn = !this.overlayOn;
    console.log(this.overlayOn + " - " + this.isMobile);
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

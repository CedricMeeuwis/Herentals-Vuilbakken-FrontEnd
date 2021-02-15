import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { Enquete } from '../shared/models/enquete';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  enquetes: Enquete[];

  constructor(
    private _enqueteService: EnqueteService,
    private router: Router,
  ) {
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

  ngOnInit(): void {
  }
}

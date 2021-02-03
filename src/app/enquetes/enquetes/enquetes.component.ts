import { Component, OnInit } from '@angular/core';
import { Enquete } from '../../shared/models/enquete';
import { EnqueteService } from '../../enquete-edit/enquete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.scss']
})
export class EnquetesComponent implements OnInit {

  enquetes: Enquete[];

  constructor(private enqueteService: EnqueteService, private router: Router) { 
    enqueteService.enquetes.subscribe(val => {
      this.enquetes = val;
    });
  }

  ngOnInit(): void {
    this.enqueteService.getEnquetes().subscribe();
  }
  async setActive(enquete: Enquete){
    let result = this.enquetes.filter(x => x.actief == true);
    result.forEach(async item => {
      item.actief = false;
      await this.enqueteService.changeEnquete(item).toPromise();
    });
    enquete.actief = true;
    this.enqueteService.changeEnquete(enquete).subscribe(e => {
      this.enqueteService.getEnquetes().subscribe();
    });
  }
  navigateNieuw(){
    this.router.navigate(["enquete-nieuw"]);
  }
  getAnswers(id: number){
    this.router.navigate(["/enquete-antwoord", id]);
  }
}

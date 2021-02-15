import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { AntwoordService } from '../enquete-antwoorden/antwoord.service';
import { Antwoord } from '../shared/models/antwoord';
import { Enquete } from '../shared/models/enquete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {

  json = null;
  currentEnquete: Enquete;
  constructor(private enqueteService: EnqueteService, private antwoordService: AntwoordService, private router: Router) { }

  ngOnInit(): void {
    this.enqueteService.getActiveEnquete().subscribe(val => {
      this.currentEnquete = val;
      this.json = JSON.parse(val.jsonData);
    });
  }
  sendEnquete = (args:any): void => {
    let antwoord = new Antwoord(JSON.stringify(args), this.currentEnquete.enqueteID);
    this.antwoordService.submitAntwoord(antwoord).subscribe();
    this.redirect();
  }
  async redirect(){
    await this.delay(2000);
    location.reload();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}

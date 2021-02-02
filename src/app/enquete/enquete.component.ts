import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { AntwoordService } from '../enquete-antwoorden/antwoord.service';
import { Antwoord } from '../shared/models/antwoord';
import { Enquete } from '../shared/models/enquete';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {

  json = null;
  currentEnquete: Enquete;
  constructor(private enqueteService: EnqueteService, private antwoordService: AntwoordService) { }

  ngOnInit(): void {
    this.enqueteService.getActiveEnquete().subscribe(val => {
      this.currentEnquete = val;
      this.json = JSON.parse(val.jsonData);
    });
  }
  sendEnquete = (args:any): void => {
    let antwoord = new Antwoord(JSON.stringify(args), this.currentEnquete.enqueteID);
    this.antwoordService.submitAntwoord(antwoord).subscribe();
  }
}

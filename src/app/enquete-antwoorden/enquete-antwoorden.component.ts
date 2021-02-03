import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { Enquete } from '../shared/models/enquete';
import { AntwoordService } from './antwoord.service';

@Component({
  selector: 'app-enquete-antwoorden',
  templateUrl: './enquete-antwoorden.component.html',
  styleUrls: ['./enquete-antwoorden.component.scss']
})
export class EnqueteAntwoordenComponent implements OnInit {

  json = null;
  answers = null;
  currentEnquete: Enquete;

  constructor(private enqueteService: EnqueteService, private antwoordService: AntwoordService) { 
    enqueteService.getActiveEnquete().subscribe(val => {
      this.json = JSON.parse(val.jsonData);
      antwoordService.getAntwoordenVanEnquete(val.enqueteID).subscribe(val => {
        this.answers = val.map(item => {
          return JSON.parse(item.jsonData);
        });
      });
    });

  }

  ngOnInit(): void {
    this.enqueteService.getActiveEnquete().subscribe(val => {
      this.currentEnquete = val;
      this.json = JSON.parse(val.jsonData);
    });
  }

}

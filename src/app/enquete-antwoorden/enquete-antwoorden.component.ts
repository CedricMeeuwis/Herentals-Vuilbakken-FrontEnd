import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { AntwoordService } from './antwoord.service';

@Component({
  selector: 'app-enquete-antwoorden',
  templateUrl: './enquete-antwoorden.component.html',
  styleUrls: ['./enquete-antwoorden.component.scss']
})
export class EnqueteAntwoordenComponent implements OnInit {

  json = null;
  answers = null;

  constructor(private enqueteService: EnqueteService, private antwoordService: AntwoordService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      let id = param['id'];
      this.enqueteService.getEnquete(id).subscribe(val => {
        this.json = JSON.parse(val.jsonData);
        this.antwoordService.getAntwoordenVanEnquete(val.enqueteID).subscribe(val => {
          this.answers = val.map(item => {
            return JSON.parse(item.jsonData);
          });
        });
      });
    });
  }

}

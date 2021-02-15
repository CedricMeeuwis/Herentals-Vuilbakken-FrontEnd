import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../enquete-edit/enquete.service';
import { AntwoordService } from '../enquete-antwoorden/antwoord.service';
import { Antwoord } from '../shared/models/antwoord';
import { Enquete } from '../shared/models/enquete';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {
  json = null;
  currentEnquete: Enquete;
  constructor(private enqueteService: EnqueteService, private antwoordService: AntwoordService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      let id = param['id'];
      this.enqueteService.getEnquete(id).subscribe(val => {
        if(!val.actief){
          this.router.navigate(['/']);
        }
        this.currentEnquete = val;
        this.json = JSON.parse(val.jsonData);
      }, error => {
        this.router.navigate(['/']);
      });
    });
  }
  sendEnquete = (args:any): void => {
    let antwoord = new Antwoord(JSON.stringify(args), this.currentEnquete.enqueteID);
    this.antwoordService.submitAntwoord(antwoord).subscribe();
    this.redirect();
  }
  async redirect(){
    await this.delay(5000);
    location.reload();
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
}

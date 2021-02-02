import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enquete } from '../shared/models/enquete';
import { EnqueteService } from './enquete.service';

@Component({
  selector: 'app-enquete-edit',
  templateUrl: './enquete-edit.component.html',
  styleUrls: ['./enquete-edit.component.scss']
})
export class EnqueteEditComponent implements OnInit {

  json = JSON.parse(localStorage.getItem("test"));

  savedEnquete = new Enquete('','', false);
  constructor(private enqueteService: EnqueteService, private router: Router) {
  }

  ngOnInit(): void {
  }
  saveEnquete = (args:any): void => {
    let workData = JSON.parse(args);
    if(workData["title"] != null){
      this.savedEnquete.naam = workData["title"];
    }else{
      this.savedEnquete.naam = workData["pages"][0]["name"];
    }
    this.savedEnquete.jsonData = JSON.stringify(args);

    if(this.savedEnquete.enqueteID == null){
      this.enqueteService.addEnquete(this.savedEnquete).subscribe(val => {
        this.savedEnquete = val;
      });
    }else{
      this.enqueteService.changeEnquete(this.savedEnquete).subscribe(val => {
        this.savedEnquete = val;
      });
    }
  }
  goBack(){
    this.router.navigate(['enquetes']);
  }
}

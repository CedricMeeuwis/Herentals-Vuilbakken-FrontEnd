import { Component, OnInit } from '@angular/core';
import { Enquete } from '../../shared/models/enquete';
import { EnqueteService } from '../../enquete-edit/enquete.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '@full-fledged/alerts';

@Component({
  selector: 'app-enquetes',
  templateUrl: './enquetes.component.html',
  styleUrls: ['./enquetes.component.scss']
})
export class EnquetesComponent implements OnInit {

  enquetes: Enquete[];
  selectedEnquete: Enquete;
  confirmDelete = "";

  constructor(private enqueteService: EnqueteService, private router: Router, private modalService: NgbModal, private alertService: AlertService) { 
    enqueteService.enquetes.subscribe(val => {
      this.enquetes = val;
    });
  }

  ngOnInit(): void {
    this.enqueteService.getEnquetes().subscribe();
  }
  toggleActive(enquete: Enquete){
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
  open(content, enquete){
    if(enquete.actief){
      this.alertService.warning("Enquete staat actief! Stel een andere op actief voor verwijderen");
    }else{
      this.selectedEnquete = enquete;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
  }
  close(){
    this.confirmDelete = "";
    this.modalService.dismissAll();
  }
  deleteEnquete(){
    if(this.confirmDelete == this.selectedEnquete.naam){
      this.enqueteService.deleteEnquete(this.selectedEnquete.enqueteID).subscribe(e => {
        this.enqueteService.getEnquetes().subscribe();
      });
      this.modalService.dismissAll();
    }
    this.confirmDelete = "";
  }
}

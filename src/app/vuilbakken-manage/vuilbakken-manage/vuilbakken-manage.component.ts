import { Component, OnInit } from '@angular/core';
import {ManageVuilbakkenService} from '../services/manage-vuilbakken.service';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';
import { Vuilbak } from '../../shared/models/vuilbak';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ZoneService } from 'src/app/vuilbakken/services/zone.service';
import { Zone } from '../../shared/models/zone';

@Component({
  selector: 'app-vuilbakken-manage',
  templateUrl: './vuilbakken-manage.component.html',
  styleUrls: ['./vuilbakken-manage.component.scss']
})
export class VuilbakkenManageComponent implements OnInit {

    vuilbakken: Vuilbak[];
    selectedVuilbak: Vuilbak;
    confirmDelete = "";
    zones: Zone[];


  constructor(
    private _manageVuilbakkenService: ManageVuilbakkenService, 
    private router: Router, 
    private modalService: NgbModal,
    private _zoneService: ZoneService,
  ) {

    this._manageVuilbakkenService.vuilbakken.subscribe(result =>{
      this.vuilbakken=result;
    })
    this.haalVuilbakkenOp();
    this.haalZonesOp();
   }

   haalVuilbakkenOp(){
     this._manageVuilbakkenService.getVuilbakken().subscribe(result =>{
      this.vuilbakken=result;
      console.log(JSON.stringify(result));
     })
   }

   haalZonesOp(){
    this._zoneService.getZones().subscribe(result=>{
      this.zones=result;
      console.log(JSON.stringify(result));
    })
   }

   deleteVuilbak(){
    if(this.confirmDelete == this.selectedVuilbak.straat){
      this._manageVuilbakkenService.deleteVuilbak(this.selectedVuilbak.vuilbakID).subscribe(e => {
      });
      this.confirmDelete = "";
      this.modalService.dismissAll();
    }
  }

  updateVuilbak(){
    this._manageVuilbakkenService.changeVuilbak(this.selectedVuilbak).subscribe(e => {
      this._manageVuilbakkenService.getVuilbakken().subscribe();
    });
    this.modalService.dismissAll();
  }

  open(content, vuilbak){
    this._manageVuilbakkenService.getVuilbakken().subscribe(val => {
      this.vuilbakken = val;
    });
    this.selectedVuilbak = vuilbak;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  
  close(){
    this.confirmDelete = "";
    this.modalService.dismissAll();
  }
  navigateNieuw(){
    this.router.navigate(['/nieuwe-vuilbak']);
  }

  ngOnInit(): void {
  }

}

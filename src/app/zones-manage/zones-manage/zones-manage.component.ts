import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/shared/models/zone';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ZonesManageService } from '../services/zones-manage.service';

@Component({
  selector: 'app-zones-manage',
  templateUrl: './zones-manage.component.html',
  styleUrls: ['./zones-manage.component.scss']
})
export class ZonesManageComponent implements OnInit {

  zones: Zone[];
  selectedZone: Zone;
  confirmDelete = "";

  constructor(
    private modalService: NgbModal,
    private _manageZoneService: ZonesManageService,
    private router: Router, 
  ) { 
    this._manageZoneService.zones.subscribe(result =>{
      this.zones=result;
    })

    this.haalZonesOp();
  }

  haalZonesOp(){
    this._manageZoneService.getZones().subscribe(result=>{
      this.zones=result;
    })
  }

  deleteZone(){
    if(this.confirmDelete == this.selectedZone.naam){
      this._manageZoneService.deleteZone(this.selectedZone.zoneID).subscribe(e => {
        this._manageZoneService.getZones().subscribe();
      });
      this.confirmDelete = "";
      this.modalService.dismissAll();
    }
  }

  updateZone(){
    this._manageZoneService.changeZone(this.selectedZone).subscribe(e => {
      this._manageZoneService.getZones().subscribe();
    });
    this.modalService.dismissAll();
  }

  open(content, zone){
    this._manageZoneService.getZones().subscribe(val => {
      this.zones = val;
    });
    this.selectedZone = zone;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  
  close(){
    this.confirmDelete = "";
    this.modalService.dismissAll();
  }
  navigateNieuw(){
    this.router.navigate(['/nieuwe-zone']);
  }


  ngOnInit(): void {
  }

}

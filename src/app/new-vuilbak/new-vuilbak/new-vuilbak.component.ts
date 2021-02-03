import { Component, OnInit } from '@angular/core';
import { Vuilbak } from 'src/app/shared/models/vuilbak';
import { Zone } from 'src/app/shared/models/zone';
import { ZonesManageService } from '../../zones-manage/services/zones-manage.service';
import { ManageVuilbakkenService } from '../../vuilbakken-manage/services/manage-vuilbakken.service';
import { Router } from '@angular/router';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';
import { VuilbakLoggingService } from '../vuilbak-logging.service';

@Component({
  selector: 'app-new-vuilbak',
  templateUrl: './new-vuilbak.component.html',
  styleUrls: ['./new-vuilbak.component.scss']
})
export class NewVuilbakComponent implements OnInit {

  newVuilbak: Vuilbak = new Vuilbak(0, 0, 0, "", 0, 0, false, null);
  zones: Zone[];

  constructor(
    private _manageZoneService: ZonesManageService,
    private _manageVuilbakService: ManageVuilbakkenService,
    private _manageVuilbakLoggingService: VuilbakLoggingService,
    private router: Router,
  ) {

    this.getZones();
  }

  getZones() {
    this._manageZoneService.getZones().subscribe(result => {
      this.zones = result;
    })
  }

  addVuilbak() {
    this.newVuilbak.wanneerVol = Math.max(20, this.newVuilbak.wanneerVol);
    this.newVuilbak.lengtegraad = Math.max(4.772506558177669 , Math.min(4.88736353932897, this.newVuilbak.lengtegraad));
    this.newVuilbak.breedtegraad = Math.max(51.10095321093614, Math.min(51.217455822829095, this.newVuilbak.breedtegraad));

    this.newVuilbak.volheid = Math.random() * this.newVuilbak.wanneerVol;
    this.newVuilbak.gewicht = (this.newVuilbak.volheid/this.newVuilbak.wanneerVol) * ((Math.random() * 200) + 1300);
    
    this._manageVuilbakService.newVuilbak(this.newVuilbak).subscribe(result =>{
      this.addVuilbakLogging(result);
      this.router.navigate(["/vuilbakken-manage"]);
    });
  }
  addVuilbakLogging(vuilbak: Vuilbak){
    var today = new Date();
    var newVol = vuilbak.volheid - Math.random() * 15;
    if(vuilbak.volheid <= 15){
      newVol = (Math.random() * 15) + vuilbak.wanneerVol - 15;
    }
    today.setDate(today.getDate()-1);
    let vuilbakLog = new VuilbakLogging(newVol, (newVol/this.newVuilbak.wanneerVol) * ((Math.random() * 200) + 1300), today, vuilbak.vuilbakID);
    this._manageVuilbakLoggingService.addVuilbakLogging(vuilbakLog).subscribe(val => {
      newVol = val.volheid - Math.random() * 15;
      if(vuilbak.volheid <= 15){
        newVol = (Math.random() * 15) + vuilbak.wanneerVol - 15;
      }
      today.setDate(today.getDate()-1);
      let vuilbakLog2 = new VuilbakLogging(newVol, (newVol/this.newVuilbak.wanneerVol) * ((Math.random() * 200) + 1300), today, vuilbak.vuilbakID);
      this._manageVuilbakLoggingService.addVuilbakLogging(vuilbakLog2).subscribe();
    });
  }

  terug() {
    this.router.navigate(["/vuilbakken-manage"]);
  }

  ngOnInit(): void {
  }

}

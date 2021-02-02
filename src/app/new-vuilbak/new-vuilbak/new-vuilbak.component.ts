import { Component, OnInit } from '@angular/core';
import { Vuilbak } from 'src/app/shared/models/vuilbak';
import { Zone } from 'src/app/shared/models/zone';
import { ZonesManageService } from '../../zones-manage/services/zones-manage.service';
import { ManageVuilbakkenService } from '../../vuilbakken-manage/services/manage-vuilbakken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-vuilbak',
  templateUrl: './new-vuilbak.component.html',
  styleUrls: ['./new-vuilbak.component.scss']
})
export class NewVuilbakComponent implements OnInit {

  newVuilbak: Vuilbak = new Vuilbak(0, 0, 0, "", 0, 0, 1);
  zones: Zone[];
  zoneID = 1;

  constructor(
    private _manageZoneService: ZonesManageService,
    private _manageVuilbakService: ManageVuilbakkenService,
    private router: Router,

  ) {

    this.getZones();
  }

  getZones() {
    this._manageZoneService.getZones().subscribe(result => {
      this.zones = result;
      console.log(result);
    })
  }

  addVuilbak() {

    this.newVuilbak.volheid=0;
    this.newVuilbak.gewicht=0;
    this.newVuilbak.zoneID=this.zoneID;
    
    this._manageVuilbakService.newVuilbak(this.newVuilbak).subscribe(result =>{
      this.router.navigate(["/vuilbakken-manage"]);
    });
  }

  terug() {
    this.router.navigate(["/vuilbakken-manage"]);
  }

  ngOnInit(): void {
  }

}

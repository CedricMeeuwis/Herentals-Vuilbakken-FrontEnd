import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zone } from 'src/app/shared/models/zone';
import { ZonesManageService } from '../../zones-manage/services/zones-manage.service';

@Component({
  selector: 'app-new-zone',
  templateUrl: './new-zone.component.html',
  styleUrls: ['./new-zone.component.scss']
})
export class NewZoneComponent implements OnInit {

  newZone: Zone = new Zone("");

  constructor(
    private _manageZoneService: ZonesManageService,
    private router: Router,
  ) {
  }

  addZone() {

    this._manageZoneService.addZone(this.newZone).subscribe(result => {
      this.router.navigate(["/zones-manage"]);
    });
  }

  terug() {
    this.router.navigate(["/zones-manage"]);
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { VuilbakService } from '../services/vuilbak.service';
import { ZoneService } from '../services/zone.service';
import { VuilbakBinding } from '../../shared/models/vuilbak-binding';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';
import { Vuilbak } from '../../shared/models/vuilbak';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService } from '@full-fledged/alerts';
import { Options } from "@angular-slider/ngx-slider";
import { Zone } from '../../shared/models/zone';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-vuilbakken',
  templateUrl: './vuilbakken.component.html',
  styleUrls: ['./vuilbakken.component.scss']
})

export class VuilbakkenComponent implements OnInit {
  //Data
  vuilbakData: VuilbakBinding[];

  //Variabeles voor filtering
  straatFilter = "";
  volhMin = 0;
  volhMax = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    getSelectionBarColor: (value: number): string => {
      if (this.volhMin == 0 && this.volhMax > 99){
        return '#5c8eb0';
      }
      if (this.volhMin <= 55 && this.volhMax <=55) {
          return '#42BD50';
      }
      if (this.volhMin >55  && this.volhMax <=75 || this.volhMin <=75 && this.volhMax <=75) {
          return '#FFC107';
      }
      if (this.volhMin >75 || this.volhMax >75) {
          return '#F44336';
      }
      return '#2AE02A';
    }
  };
  fireFilter = false;
  erIsBrand = false;
  aantalDagenOphalen = -1;

  //Google map urls
  frameUrls: SafeResourceUrl[];

  //Variabeles voor zone beheer
  alleZones: Zone[];
  editMode = false;
  selectedZone = 0;
  zoneNaamInput = "";
  addOrChange = false;
  done = false;

  constructor(private _vuilbakService: VuilbakService, private _zoneService: ZoneService, private sanitizer: DomSanitizer, private alertService: AlertService, private modalService: NgbModal) { 
    this.frameUrls = [];
    _zoneService.zones.subscribe(val => {
      this.alleZones = val;
    });
    _vuilbakService.vuilbakken.subscribe(val => {
      if(val != null){
        this.BouwVuilbakkenOp(val);
        this.BouwLoggingOp();
      }
    });
  }
  ngOnInit(): void {
    this._zoneService.getZones().subscribe();
    this._vuilbakService.getVuilbakken().subscribe();
  }
  //Zone functionaliteit
  toggleEditMode(value: boolean){
    this.editMode = value;
    console.log(value);
    if(value == true){
      this.done == true;
    } else {
      this.done == false;
    }
  }
  openAdd(content){
    this.zoneNaamInput = "";
    this.addOrChange = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
  openChange(content){
    if(this.selectedZone != 0){
      this.addOrChange = true;
      let zone = this.alleZones.filter(x => x.zoneID == this.selectedZone)[0];
      this.zoneNaamInput = zone.naam;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }else{
      this.alertService.warning('Selecteer eerst een zone');
    }
  }
  openDelete(content){
    if(this.selectedZone != 0){
      let zone = this.alleZones.filter(x => x.zoneID == this.selectedZone)[0];
      this.zoneNaamInput = zone.naam;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }else{
      this.alertService.warning('Selecteer eerst een zone');
    }
  }
  addZone(){
    let newZone = new Zone(this.zoneNaamInput);
    this._zoneService.addZone(newZone).subscribe(e => {
      this._zoneService.getZones().subscribe();
    });
    this.modalService.dismissAll();
  }
  changeZone(){
    let zone = new Zone(this.zoneNaamInput, this.selectedZone);
    this._zoneService.changeZone(zone).subscribe(e => {
      this._zoneService.getZones().subscribe();
    });
    this.modalService.dismissAll();
  }
  deleteZone(){
    this._zoneService.deleteZone(this.selectedZone).subscribe(e => {
      this._zoneService.getZones().subscribe();
    });
    this.modalService.dismissAll();
  }
  addZoneToVuilbak(vuilbak: Vuilbak){
    if(this.selectedZone != 0){
      vuilbak.zoneID = this.selectedZone;
      this._vuilbakService.changeVuilbak(vuilbak).subscribe(e => {
        this._vuilbakService.getVuilbakken().subscribe();
      });
    }else{
      this.alertService.warning('Selecteer eerst een zone');
    }
  }
  removeZoneFromVuilbak(vuilbak: Vuilbak){
    vuilbak.zoneID = null;
    this._vuilbakService.changeVuilbak(vuilbak).subscribe(e => {
      this._vuilbakService.getVuilbakken().subscribe();
    });
  }
  //Frontend functionaliteit
  assignPercentage(n): number{
    return Math.max(n, 0.00001);
  }
  toggleFire(){
    if(this.fireFilter == false){
      this.straatFilter = "";
      this.volhMin = 0;
      this.volhMax = 100;
    }
    this.fireFilter = !this.fireFilter;
  }
  getText(perc): string{
    if(perc >= 75){
      return "Ophalen";
    } if(perc > 55){
      return "Bijna vol";
    }
    return "Niet ophalen";
  }
  getColor(perc): string{
    if(perc >= 75){
      return "#F44336";
    } if(perc > 55){
      return "#FFC107";
    }
    return "#42BD50";
  }
  getWhatDay(n): string{
    var dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var datum = new Date();
    datum.setDate(datum.getDate() + n);
    return dagen[datum.getDay()];
  }
  filterSearch(base: string, subs: string): boolean{
    base = base.toLowerCase().replace(/\s/g, "");
    subs = subs.toLowerCase().replace(/\s/g, "");

    return(base.includes(subs));
  }
  convertGram(gram: number): string{
    var check = Math.trunc(gram);
    if(check.toString().length >= 4){
      gram /= Math.pow(10, 3);
      gram = Math.round(gram * 100) / 100
      return gram.toString() + "kg";
    }
    return gram.toString() + "g";
  }
  //Ophaal en bouwen van vuilbak data
  BouwVuilbakkenOp(data){
    //Haal alle vuilbakken op
    this.vuilbakData = [];
    data.forEach(element => {
      this.vuilbakData.push(new VuilbakBinding(element));
      this.buildUrl(element.breedtegraad, element.lengtegraad);
      if(element.brand){
        this.alertService.danger('Er is ergens brand gemeten!');
      }
    });
  }
  BouwLoggingOp(){
    //Haal voor elke vuilbak zijn logging data op
    for(let i = 0; i < this.vuilbakData.length; i++){
      this._vuilbakService.getLoggingOfVuilbak(this.vuilbakData[i].vuilbak.vuilbakID).subscribe(val =>{
        this.vuilbakData[i].logging = val;
        this.BouwPredictionOp(i);
      });
    }
  }
  BouwPredictionOp(i){
    //Bereken gemiddeld verschil van volheid
    var pred = 0;
    var sum = 0;
    var lngth = this.vuilbakData[i].logging.length;
    var divider = Math.max(1, (lngth - 1));
    for(let j = 0; j < lngth-1; j++){
      //Verschillen berekenen
      var diff = this.vuilbakData[i].logging[j+1].volheid - this.vuilbakData[i].logging[j].volheid;
      //Als vuilbak is verminderd tel de rekening er niet bij mee
      if(diff < 0){
        divider = Math.max(1, divider - 1);
      }else{
        sum += diff; 
      }
    }
    pred = sum/divider;

    this.BouwWhenFullOp(pred, i);

    this.vuilbakData[i].prediction = Math.min(100, ((this.vuilbakData[i].vuilbak.volheid + pred)/this.vuilbakData[i].vuilbak.wanneerVol)*100);
  }
  BouwWhenFullOp(pred, i){
    if(pred > 0){
      var check = this.vuilbakData[i].vuilbak.volheid;
      var amount = 0;
      while(check < 75){
        amount++;
        check += pred;
      }
      this.vuilbakData[i].whenFull = amount;
    }
  }
  //Bouw google maps
  buildUrl(bg, lg){
    this.frameUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + bg + ", " + lg + "&z=15&output=embed"));
  }

}

import { Component, OnInit } from '@angular/core';
import { VuilbakService } from '../vuilbak.service';
import { VuilbakBinding } from '../../shared/models/vuilbak-binding';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';
import { Vuilbak } from '../../shared/models/vuilbak';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService } from '@full-fledged/alerts';


@Component({
  selector: 'app-vuilbakken',
  templateUrl: './vuilbakken.component.html',
  styleUrls: ['./vuilbakken.component.scss']
})

export class VuilbakkenComponent implements OnInit {
  vuilbakData: VuilbakBinding[];

  straatFilter = "";
  volhMin = 0;
  volhMax = 100;
  fireFilter = false;

  erIsBrand = false;
  //Aanpassen voor meer weken mee te meten
  maxDagAantal = 5;

  frameUrls: SafeResourceUrl[];
  constructor(private _vuilbakService: VuilbakService, private sanitizer: DomSanitizer, private alertService: AlertService) { 
    this.frameUrls = [];
  }
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
  filterSearch(base: string, subs: string): boolean{
    base = base.toLowerCase().replace(/\s/g, "");
    subs = subs.toLowerCase().replace(/\s/g, "");

    return(base.includes(subs));
  }
  ngOnInit(): void {
    this._vuilbakService.getVuilbakken().subscribe(val =>{
      this.BouwVuilbakkenOp(val);
      this.BouwLoggingOp();
    });
  }
  BouwVuilbakkenOp(data){
    //Haal alle vuilbakken op
    this.vuilbakData = [];
    data.forEach(element => {
      this.vuilbakData.push(new VuilbakBinding(element));
      this.buildUrl(element.breedtegraad, element.lengtegraad);
      if(element.brand){
        this.alertService.danger('Er is ergens brand gemeten!')
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
    var lngth = Math.min(this.maxDagAantal, this.vuilbakData[i].logging.length);
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

    this.vuilbakData[i].prediction = Math.min(100, ((this.vuilbakData[i].vuilbak.volheid + pred)/this.vuilbakData[i].vuilbak.wanneerVol)*100);
    console.log(this.vuilbakData);
  }
  buildUrl(bg, lg){
    this.frameUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + bg + ", " + lg + "&z=15&output=embed"));
    console.log("been here");
  }
}

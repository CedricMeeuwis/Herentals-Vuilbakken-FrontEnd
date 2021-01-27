import { Component, OnInit } from '@angular/core';
import { VuilbakService } from '../vuilbak.service';
import { VuilbakBinding } from '../../shared/models/vuilbak-binding';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';
import { Vuilbak } from '../../shared/models/vuilbak';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-vuilbakken',
  templateUrl: './vuilbakken.component.html',
  styleUrls: ['./vuilbakken.component.scss']
})
export class VuilbakkenComponent implements OnInit {
  vuilbakData: VuilbakBinding[];

  color: String;
  subTitle: String;
  brand: Boolean = true;
  percentage = 80;

  constructor(private _vuilbakService: VuilbakService) { 
  this.cirkelUI();
  }

  cirkelUI(){
    if(this.percentage >= 75){
      this.color="#F44336";
      this.subTitle="Ophalen"
    } else if(this.percentage <=75 && this.percentage >55){
      this.color="#FFC107";
      this.subTitle="Bijna vol";
    } else if(this.percentage <=60){
      this.color="#42BD50";
      this.subTitle="Niet ophalen"
    }
  }

  ngOnInit(): void {
    this._vuilbakService.getVuilbakken().subscribe(val =>{
      console.log("1");
      this.BouwVuilbakkenOp(val);
      this.BouwLoggingOp();
    });
  }
  BouwVuilbakkenOp(data){
    //Haal alle vuilbakken op
    data.forEach(element => {
      this.vuilbakData.push(new VuilbakBinding(element));
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
    //Aanpassen voor meer weken mee te meten
    var maxWeekAantal = 3;
    //Bereken gemiddeld verschil van volheid
    var pred = 0;
    var sum = 0;
    var lngth = Math.min(maxWeekAantal, this.vuilbakData[i].logging.length);
    var divider = Math.max(1, (lngth - 1));
    for(let j = 0; j < lngth-1; j++){
      //Verschillen berekenen
      var diff = this.vuilbakData[i].logging[j+1].volheid - this.vuilbakData[i].logging[j].volheid;
      sum += diff;
    }
    pred = sum/divider;

    this.vuilbakData[i].prediction;
  }
}

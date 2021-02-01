import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vuilbak } from '../../shared/models/vuilbak';
import { VuilbakLogging } from '../../shared/models/vuilbak-logging';

@Injectable({
  providedIn: 'root'
})
export class VuilbakService {

  vuilbakken = new BehaviorSubject<Vuilbak[]>(null);

  constructor(private _httpClient: HttpClient) { }

  vuilbakUrl = "https://cit-app-service.azurewebsites.net/api/Vuilbak";
  loggingUrl = "https://cit-app-service.azurewebsites.net/api/VuilbakLogging";

  getVuilbakken(): Observable<Vuilbak[]>{
    let output = this._httpClient.get<Vuilbak[]>(this.vuilbakUrl);
    this.refresh(output);
    return output;
  }
  getVuilbak(id: number): Observable<Vuilbak>{
    return this._httpClient.get<Vuilbak>(this.vuilbakUrl + "/" + id);
  }
  changeVuilbak(vuilbak: Vuilbak): Observable<Vuilbak>{
    return this._httpClient.put<Vuilbak>(this.vuilbakUrl + "/" + vuilbak.vuilbakID, vuilbak);
  }
  getLoggingOfVuilbak(id: number): Observable<VuilbakLogging[]>{
    return this._httpClient.get<VuilbakLogging[]>(this.loggingUrl + "/Vuilbak/" + id);
  }
  private refresh(output){
    output.subscribe(val =>{
      this.vuilbakken.next(val);
    });
  }
}

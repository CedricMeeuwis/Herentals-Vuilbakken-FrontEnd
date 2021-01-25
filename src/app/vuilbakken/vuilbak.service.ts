import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vuilbak } from '../shared/models/vuilbak';
import { VuilbakLogging } from '../shared/models/vuilbak-logging';

@Injectable({
  providedIn: 'root'
})
export class VuilbakService {

  constructor(private _httpClient: HttpClient) { }

  vuilbakUrl = "https://cit-app-service.azurewebsites.net/api/Vuilbak";
  loggingUrl = "https://cit-app-service.azurewebsites.net/api/VuilbakLogging";

  getVuilbakken(): Observable<Vuilbak[]>{
    return this._httpClient.get<Vuilbak[]>(this.vuilbakUrl);
  }
  getVuilbak(id: number): Observable<Vuilbak>{
    return this._httpClient.get<Vuilbak>(this.vuilbakUrl + "/" + id);
  }
  getLoggingOfVuilbak(id: number): Observable<VuilbakLogging[]>{
    return this._httpClient.get<VuilbakLogging[]>(this.loggingUrl + "/Vuilbak/" + id);
  }
}

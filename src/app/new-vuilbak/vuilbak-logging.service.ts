import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { VuilbakLogging } from '../shared/models/vuilbak-logging';

@Injectable({
  providedIn: 'root'
})
export class VuilbakLoggingService {

  vuilbakUrl = "https://cit-app-service.azurewebsites.net/api/VuilbakLogging";

  constructor(private _httpClient: HttpClient) { }

  addVuilbakLogging(vuilbakLogging: VuilbakLogging): Observable<VuilbakLogging>{
    return this._httpClient.post<VuilbakLogging>(this.vuilbakUrl, vuilbakLogging);
  }
}

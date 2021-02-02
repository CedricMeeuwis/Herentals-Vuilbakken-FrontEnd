import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Zone } from '../../shared/models/zone';

@Injectable({
  providedIn: 'root'
})
export class ZonesManageService {

  zones = new BehaviorSubject<Zone[]>(null);

  constructor(private _httpClient: HttpClient) { }

  zoneUrl = "https://cit-app-service.azurewebsites.net/api/Zone";

  getZones(): Observable<Zone[]>{
    let output = this._httpClient.get<Zone[]>(this.zoneUrl);
    this.refresh(output);
    return output;
  }
  addZone(zone: Zone): Observable<Zone>{
    return this._httpClient.post<Zone>(this.zoneUrl, zone);
  }
  changeZone(zone: Zone): Observable<Zone>{
    return this._httpClient.put<Zone>(this.zoneUrl + "/" + zone.zoneID, zone);
  }
  deleteZone(id: number): Observable<Zone>{
    return this._httpClient.delete<Zone>(this.zoneUrl + "/" + id);
  }
  private refresh(output){
    output.subscribe(val =>{
      this.zones.next(val);
    });
  }
}
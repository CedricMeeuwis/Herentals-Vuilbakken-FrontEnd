import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Antwoord } from '../shared/models/antwoord';

@Injectable({
  providedIn: 'root'
})
export class AntwoordService {

  constructor(private _httpClient: HttpClient) { }

  antwoordUrl = "https://cit-app-service.azurewebsites.net/api/Antwoord";

  getAntwoordenVanEnquete(id: number): Observable<Antwoord[]>{
    return this._httpClient.get<Antwoord[]>(this.antwoordUrl + '/Active/' + id);
  }
  submitAntwoord(antwoord: Antwoord): Observable<Antwoord>{
    return this._httpClient.post<Antwoord>(this.antwoordUrl, antwoord);
  }
}

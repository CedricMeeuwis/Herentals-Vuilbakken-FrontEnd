import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Enquete } from '../shared/models/enquete';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  enquetes = new BehaviorSubject<Enquete[]>(null);

  constructor(private _httpClient: HttpClient) { }

  enqueteUrl = "https://cit-app-service.azurewebsites.net/api/Enquete";

  getEnquetes(): Observable<Enquete[]>{
    let output = this._httpClient.get<Enquete[]>(this.enqueteUrl);
    this.refresh(output);
    return output;
  }
  getEnquete(id: number): Observable<Enquete>{
    return this._httpClient.get<Enquete>(this.enqueteUrl + "/" + id);
  }
  addEnquete(enquete: Enquete): Observable<Enquete>{
    return this._httpClient.post<Enquete>(this.enqueteUrl, enquete);
  }
  changeEnquete(enquete: Enquete): Observable<Enquete>{
    return this._httpClient.put<Enquete>(this.enqueteUrl + "/" + enquete.enqueteID, enquete);
  }
  deleteEnquete(id: number): Observable<Enquete>{
    return this._httpClient.delete<Enquete>(this.enqueteUrl + "/" + id);
  }
  getActiveEnquete(): Observable<Enquete>{
    return this._httpClient.get<Enquete>(this.enqueteUrl + "/Active");
  }
  private refresh(output){
    output.subscribe(val =>{
      this.enquetes.next(val);
    });
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderClass } from '../models/providers.class';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
// URL ENDPOINT TO OUR EXPRESS APP
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  //Get all records
  getProviders(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
  //Get one record
  getProvider(id: number): Observable<any>{
    return this.http.get(this.apiUrl+id);
  }
  //Put one record
  updateProvider(id: number, newProvider: ProviderClass): Observable<ProviderClass>{
    return this.http.put<ProviderClass>(this.apiUrl+id, newProvider);
  }
  addProviders(newProvider: ProviderClass): Observable<any>{
    return this.http.post(this.apiUrl, newProvider);
  }
  deleteProvider(id: number): Observable<any>{
    return this.http.delete(this.apiUrl+id);
  }
}

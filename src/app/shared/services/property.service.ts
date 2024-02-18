import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AllListing } from '../models/all-listing';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  apiUrl = "http://localhost:3000/properties";

  getAllProperties(): Observable<AllListing[]> {
    return this.http.get<AllListing[]>(this.apiUrl);
  }

  getVipProperties(): Observable<AllListing[]> {
    return this.http.get<AllListing[]>(this.apiUrl).pipe(
      map((listings: AllListing[]) => listings.filter(listing => listing.vip === true))
    );
  }

  getProperty(propertyId: string): Observable<AllListing> {
    return this.http.get<AllListing>(`${this.apiUrl}/${propertyId}`);
  }

  constructor(private http: HttpClient) { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AllListing } from '../models/all-listing';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  apiUrl = "http://localhost:3000/properties";
  favoritesApiUrl = "http://localhost:3000/favorites";

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

  addToFavorites(item: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(this.favoritesApiUrl, item);
  }

  getFavorite(propertyId: number): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.favoritesApiUrl}/${propertyId}`);
  }

  getFavorites(userId: string): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.favoritesApiUrl}/${userId}`);
  }

  constructor(private http: HttpClient) { }
}

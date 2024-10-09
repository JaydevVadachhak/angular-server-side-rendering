import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beverage } from '../interface/Beverage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BeveragesService {
  constructor(private readonly http: HttpClient) {}

  findBeverages(): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b`
    );
  }

  findBeverageById(id: number): Observable<Beverage> {
    return this.http.get<Beverage>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}

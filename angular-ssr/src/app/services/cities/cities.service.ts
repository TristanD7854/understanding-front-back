import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private backEndUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public callBackend(): Observable<City[]> {
    return this.http.get<City[]>(`${this.backEndUrl}/cities`);
  }
}

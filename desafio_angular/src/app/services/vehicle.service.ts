import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<any>(`${this.apiUrl}/vehicles`);
  }

  getVehicleData(vin: string) {
    return this.http.post<any>(`${this.apiUrl}/vehicledata`, { vin });
  }
}

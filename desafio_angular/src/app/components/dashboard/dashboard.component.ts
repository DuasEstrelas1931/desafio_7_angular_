import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-dashboard',
   imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicles: any[] = [];
  filteredModels: string[] = [];
  selectedModel: string = '';
  selectedVehicle: any = null;
  selectedVehicleImage: string = '';
  vin: string = '';
  vinData: any = null;
  showModelList = false;
  totalVehicles = 0;
  totalConnected = 0;
  totalUpdates = 0;
  searchModel: string = '';


  constructor(private vehicleService: VehicleService, private authService: AuthService) {}


  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(({ vehicles }) => {
      this.vehicles = vehicles;
      this.filteredModels = vehicles.map((v: { vehicle: any; }) => v.vehicle);
      this.totalVehicles = vehicles.reduce((a: any, v: { volumetotal: any; }) => a + v.volumetotal, 0);
      this.totalConnected = vehicles.reduce((a: any, v: { connected: any; }) => a + v.connected, 0);
      this.totalUpdates = vehicles.reduce((a: any, v: { softwareUpdates: any; }) => a + v.softwareUpdates, 0);
    });
  }

  filterModels() {
    this.filteredModels = this.vehicles
      .map(v => v.vehicle)
      .filter(m => m.toLowerCase().includes(this.searchModel.toLowerCase()));
  }

  selectModel(model: string) {
    this.selectedModel = model;
    this.selectedVehicle = this.vehicles.find(v => v.vehicle === model);
    this.selectedVehicleImage = this.selectedVehicle?.img;
    this.showModelList = false;
  }

  searchByModel() {
    const match = this.vehicles.find(v => v.vehicle.toLowerCase() === this.searchModel.toLowerCase());
    if (match) this.selectModel(match.vehicle);
  }

  getVehicleData() {
    this.vehicleService.getVehicleData(this.vin).subscribe({
      next: (data) => this.vinData = data,
      error: () => alert('VIN não encontrado!')
    });
  }

  logout() {
     alert('Saindo...');
    this.authService.logout();
  }
  home() {
   this.authService.home();
 }
}


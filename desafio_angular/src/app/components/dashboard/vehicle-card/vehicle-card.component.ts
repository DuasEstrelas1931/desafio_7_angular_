import { Component, Input } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-card',
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent {
  @Input() vehicle: any;
  details: any = null;

  constructor(private vehicleService: VehicleService) {}

  showDetails() {
    this.vehicleService.getVehicleData(this.vehicle.id).subscribe({
      next: (response) => {
        this.details = response;
      },
      error: (error) => {
        console.error('Erro ao buscar detalhes:', error);
      }
    });
  }
}
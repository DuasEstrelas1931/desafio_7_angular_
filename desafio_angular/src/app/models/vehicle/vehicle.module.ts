export interface Vehicle {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
}

export interface VehicleDetails {
  id: number;
  odometro: number;
  nivelCombustivel: number;
  status: string;
  lat: number;
  long: number;
}
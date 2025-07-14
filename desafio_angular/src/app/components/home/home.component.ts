import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
home() {
throw new Error('Method not implemented.');
}
  public get authService(): AuthService {
    return this._authService;
  }
  public set authService(value: AuthService) {
    this._authService = value;
  }

  currentUser: any;
  menuAberto = false;

  constructor(private _authService: AuthService, private router: Router) {
    this.currentUser = this.authService.getCurrentUser();
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.authService.logout();
    alert("Saindo...");
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}

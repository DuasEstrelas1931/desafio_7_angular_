import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient, private router: Router) { }

  login(nome: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { nome, senha }).pipe(
      tap(response => {
        localStorage.setItem('currentUser', JSON.stringify(response));
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  isLoggedIn() {
    return !!localStorage.getItem('currentUser');
  }
}

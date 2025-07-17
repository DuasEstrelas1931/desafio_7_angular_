import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';



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
  
  
  isAuthenticated(): Observable<boolean> {
    // Simplesmente retorna um Observable com o resultado de isLoggedIn()
    const isLoggedIn = this.isLoggedIn(); // Usa seu método existente para verificar a presença da chave
    console.log(`AuthService.isAuthenticated() - Retornando:`, isLoggedIn);
    return of(isLoggedIn);
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
function decodeToken() {
  throw new Error('Function not implemented.');
}


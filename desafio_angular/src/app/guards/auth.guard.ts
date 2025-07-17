import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      map(isAuthenticated => {
        console.log('AuthGuard - Usuário autenticado:', isAuthenticated);
      
      if (isAuthenticated) {
        return true;
      }
      
      console.log('Redirecionando para login...');
      return this.router.createUrlTree(['/login']);
    }),
    catchError(error => {
      console.error('Erro no AuthGuard:', error);
      return of(this.router.createUrlTree(['/login']));
      })
    );
  }
}
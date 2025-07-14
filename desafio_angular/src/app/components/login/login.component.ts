import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;  // Apenas declare, sem inicializar
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicialize o formulário DENTRO do constructor
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { nome, senha } = this.loginForm.value;
      this.authService.login(nome!, senha!).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Erro ao fazer login';
        }
      });
    }
  }
}
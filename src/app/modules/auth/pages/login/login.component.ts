import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  loginForm: FormGroup;
  public role: string = '';
  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    const credentials =  this.loginForm.getRawValue();
    this.authService.login(credentials.userName, credentials.password).subscribe({
      next:(res) => {

        //Decodificar token
        const tokenPayload = this.authService.decodedToken();

        //Mostrar mensaje de exitos
        this.messageService.add({ severity: 'success', summary: 'Bienvenido', detail: 'Inicio de sesion exitoso!!' });
        
        // Redirigir según el rol de usuario
        const roles = tokenPayload.roles as string[]; // Asegúrate de que roles sea un arreglo de cadenas

        if (roles.includes('SUPPORT')) {
          setTimeout(() => {
            this.router.navigateByUrl('/support/logs');
          }, 1000);
        } else if (roles.includes('FINANCE')) {
          setTimeout(() => {
            this.router.navigateByUrl('/customers/list');
          }, 1000);
        } else {
        }
      },
      error:(err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales incorrectas' });

      }
    }
    
    );
  }

  crearcuenta(){
    this.router.navigateByUrl('/signup');
  }
}
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
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
      userName: ['acarranza@vsperu.com', [Validators.required]],
      password: ['123', Validators.required],
    });
  }

  login(): void {
    const credentials =  this.loginForm.getRawValue();
    console.log(credentials);
    this.authService.login(credentials.userName, credentials.password).subscribe({
      next:(res) => {

        //Decodificar token
        const tokenPayload = this.authService.decodedToken();
        console.log(tokenPayload);

        //Mostrar mensaje de exitos
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Inicio de sesion exitosa!!' });
        
        // Redirigir según el rol de usuario
        const roles = tokenPayload.roles as string[]; // Asegúrate de que roles sea un arreglo de cadenas

        if (roles.includes('SUPPORT')) {
          setTimeout(() => {
            this.router.navigateByUrl('/logs');
          }, 1000);
        } else if (roles.includes('FINANCE')) {
          setTimeout(() => {
            this.router.navigateByUrl('/customers');
          }, 1000);
        } else {
        }
      },
      error:(err) => {
      }
    }
    );
  }
}
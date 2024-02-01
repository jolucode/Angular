import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [MessageService],

})
export class SignupComponent {

  public user = {
    username : '',
    password : '',
    email : '',
  }

  constructor(private userService:UserService,      private router: Router
,    private messageService: MessageService,
    ) { }

  formSubmit(){
    if(this.user.username == '' || this.user.username == null){
      /*this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });*/
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        //Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
      },(error) => {
        //this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          alert('Ha ocurrido un error en el sistema');
          duration : 3000
        });
      }

      regresar(){
        this.router.navigateByUrl('/login');
      }

}

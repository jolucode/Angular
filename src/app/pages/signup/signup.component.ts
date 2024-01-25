import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  public user = {
    username : '',
    password : '',
    email : '',
  }

  constructor(private userService:UserService) { }

  formSubmit(){
    console.log(this.user);
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
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
      },(error) => {
        console.log(error);
        //this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          alert('Ha ocurrido un error en el sistema');
          duration : 3000
        });
      }

  }



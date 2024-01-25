import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer..service';

@Component({
  selector: 'app-lista-customer',
  templateUrl: './lista-customer.component.html'
})
export class ListaCustomerComponent implements OnInit{


  customers: Customer[]= [] ;

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
    this.cargarCustomers();
  }

  cargarCustomers() : void {
    this.customerService.list().subscribe(
      data => {
        this.customers = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  cambiarEstado(id: number | undefined): void {
    if (id != null) {
      this.customerService.changeState(id).subscribe(
        () => {
          console.log('Estado cambiado exitosamente');
          // Puedes realizar acciones adicionales después de cambiar el estado si es necesario
        },
        error => {
          console.error('Error al cambiar el estado:', error);
        }
      );
    } else {
      console.error('ID es undefined o null. No se puede cambiar el estado.');
    }
  }
}

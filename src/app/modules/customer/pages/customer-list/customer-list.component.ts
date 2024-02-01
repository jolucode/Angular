import { Component,OnInit } from '@angular/core';
import { Customer } from '../../../../models/customer';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerlistComponent implements OnInit{
  loading:boolean = true;
  customers: Customer[]= [] ;
  constructor(private customerService: CustomerService){}

ngOnInit(): void {
  this.cargarCustomers();
  this.loading = false;
}

cargarCustomers() : void {
  this.customerService.list().subscribe(
    data => {
      this.customers = data;
    },
    err => {
    }
  )
}

cambiarEstado(id: number | undefined): void {
  if (id != null) {
    this.customerService.changeState(id).subscribe(
      () => {
        // Puedes realizar acciones adicionales después de cambiar el estado si es necesario
        this.cargarCustomers()
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
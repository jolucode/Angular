import { Component,OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customerlist.component.html',
  styleUrl: './customerlist.component.css'
})
export class CustomerlistComponent implements OnInit{

  customers: Customer[]= [] ;
  constructor(private customerService: CustomerService){}

ngOnInit(): void {
  this.cargarCustomers();
}

cargarCustomers() : void {
  this.customerService.list().subscribe(
    data => {
      this.customers = data;
      console.log(this.customers)
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
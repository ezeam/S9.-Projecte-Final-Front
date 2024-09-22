import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestione-clienti',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gestione-clienti.component.html',
  styleUrl: './gestione-clienti.component.scss'
})
export class GestioneClientiComponent implements OnInit{
  listaClientes: Cliente[] = []
  loading: boolean = false;
  successDelete: boolean = false;
  
  constructor(private _clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getListClientes();
  };


  getListClientes(){
    this.loading = true;
    this._clienteService.getListClientes().subscribe((data: Cliente[]) => {
      this.listaClientes = data;
      this.loading = false;
    })
  }

  deleteCliente(id: number){
    this.loading = true;
    this._clienteService.deleteCliente(id).subscribe(() => {
      this.getListClientes();
      this.successDelete = true;
      setTimeout(() => {
        this.successDelete = false;
      }, 2000);
    })
  } 
}

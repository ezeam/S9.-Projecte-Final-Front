import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroment';
import { Cliente, ClienteResponse } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: String;
  private myApiUrl: String;

  constructor(private http: HttpClient) { 
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/clientes/';
  }

  getListClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteCliente(id:number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveCliente(cliente: Cliente): Observable<void>{
   return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
  }

  getCliente(id: number): Observable<ClienteResponse>{
    return this.http.get<ClienteResponse>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateCliente(id: number, cliente: Cliente): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, cliente);
  }
}

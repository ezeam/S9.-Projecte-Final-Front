export interface Cliente {
  id?: number;
  documentId: string;
  nombre: string;
  apellido: string;
  ciudad: string;
  email: string;
  telefono: string;
}

export interface ClienteResponse {
  cliente: Cliente;
}

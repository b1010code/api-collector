import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessedService {

  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get(`${this.baseUrl}/api`);
  }

  getItemById(id: number) {
    return this.http.get(`${this.baseUrl}/api/${id}`);
  }

  createItem(item: any) {
    return this.http.post(`${this.baseUrl}/api`, item);
  }

  updateItem(id: number, item: any) {
    return this.http.put(`${this.baseUrl}/api/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.baseUrl}/api/${id}`);
  }  

}

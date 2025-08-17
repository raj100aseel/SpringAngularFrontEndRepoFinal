import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class Employeeservice {
  constructor(private httpClient:HttpClient){}

  getEmployees() {
    return this.httpClient.get<Employee[]>('http://localhost:8080/allemployees');
  }

}

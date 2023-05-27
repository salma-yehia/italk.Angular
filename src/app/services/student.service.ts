import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private registerUrl = `https://localhost:7137/api/User`;
  private reservationUrl =`https://localhost:7137/api/Student/GetReservationForStudent`;

  constructor(private http : HttpClient) { }

  createStudent(student: Student): Observable<void> {
    const url = `${this.registerUrl}/StudentRegister`;
    return this.http.post<void>(url , student);
  }
  getReservationForStudent(id : number):Observable<Reservation[]>{
    const url = `${this.reservationUrl}/${id}`;
    return this.http.get<Reservation[]>(url);
  }

}

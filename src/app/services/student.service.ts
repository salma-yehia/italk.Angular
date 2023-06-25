import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Level } from '../models/level';
import { Observable } from 'rxjs';
import { GetReservation } from '../models/get-reservation';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private registerUrl = `https://italkapis.azurewebsites.net/api/User`;
  private reservationUrl = `https://italkapis.azurewebsites.net/api/Student/GetReservationForStudent`;
  private updateStudentUrl = `https://italkapis.azurewebsites.net/api/User/UpdateStudent`;
  private getStudentById  = `https://italkapis.azurewebsites.net/api/Student/GetStudentById`; 
  private updateStudentLevelUrl = `https://italkapis.azurewebsites.net/api/User/UpdateStudentLevel`;


  constructor(private http: HttpClient) {}

  createStudent(student: Student): Observable<void> {
    const url = `${this.registerUrl}/StudentRegister`;
    return this.http.post<void>(url, student);
  }
  getReservationForStudent(id: number): Observable<GetReservation[]> {
    const url = `${this.reservationUrl}/${id}`;
    return this.http.get<GetReservation[]>(url);
  }
  updateStudentById(id: number, student: Student): Observable<Student> {
    const url = `${this.updateStudentUrl}/${id}`;
    return this.http.put<Student>(url, student);
  }
  GetStudentById(id : number):Observable<Student>{
    const url = `${this.getStudentById}/${id}`;
    return this.http.get<Student>(url);
  }
  UpdateStudentLevel(id : number , level:Level):Observable<Level>{
    const url = `${this.updateStudentLevelUrl}/${id}`;
    return this.http.put<Level>(url, level);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetReservation } from '../models/get-reservation';
import { Observable, catchError, of } from 'rxjs';
import { Instructor } from '../models/instructor';
import { Reservation } from '../models/reservation';
import { UploadFile } from '../models/upload-file';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private registerUrl = `https://italkapis.azurewebsites.net/api/User`;
  private reservationUrl =`https://italkapis.azurewebsites.net/api/Instructor/GetReservationForInstructor`;
  private showInstructorsUrl=`https://italkapis.azurewebsites.net/api/Instructor/GetInstructorsForLanguage`;
  private createReservationUrl=`https://italkapis.azurewebsites.net/api/Reservation/AddReservation`
  private updateInstructorUrl = `https://italkapis.azurewebsites.net/api/User/UpdateInstructor`;
  private getInstructorById  = `https://italkapis.azurewebsites.net/api/Instructor/GetInstructorById`; 
  private checkAppointmentUrl=`https://italkapis.azurewebsites.net/api/Reservation/CheckAppointment`;

  constructor(private http : HttpClient) { }

  createInstructor(instructor: Instructor): Observable<void> {
    const url = `${this.registerUrl}/InstructorRegister`;
    return this.http.post<void>(url , instructor);
  }
  createReservation(reservation:Reservation): Observable<number> {
    const url = `${this.createReservationUrl}`;
    return this.http.post<number>(url , reservation);
  }
  getReservationForInstructor(id : number):Observable<GetReservation[]>{
    const url = `${this.reservationUrl}/${id}`;
    return this.http.get<GetReservation[]>(url);
  }
  getInstructorsForLanguage(languageId:number):Observable<Instructor[]>
  {
    const url = `${this.showInstructorsUrl}/${languageId}`;
    return this.http.get<Instructor[]>(url);
  }
  public uploadImage(image: File): Observable<UploadFile> {
    var form = new FormData();
    form.append('file', image);

    return this.http.post<UploadFile>(
      'https://italkapis.azurewebsites.net/api/File/UploadImage',
      form
    );
  }
  public uploadCertificate(cert: File): Observable<UploadFile> {
    var form = new FormData();
    form.append('file', cert);

    return this.http.post<UploadFile>(
      'https://italkapis.azurewebsites.net/api/File/UploadCertificate',
      form
    );
  }
  updateInstructorById(id: number, instructor: Instructor): Observable<Instructor> {
    const url = `${this.updateInstructorUrl}/${id}`;
    return this.http.put<Instructor>(url, instructor);
  }

  GetInstructorById(id : number):Observable<Instructor>{
    const url = `${this.getInstructorById}/${id}`;
    return this.http.get<Instructor>(url);
  }
  checkAppointment(reservation:Reservation):Observable<boolean>
  {
     const url=`${this.checkAppointmentUrl}`;
     return this.http.post<boolean>(url,reservation)
  }
}

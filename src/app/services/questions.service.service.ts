import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from '../models/questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {

  private getAllQuestions  = `https://localhost:7137/api/Questions/GetAllQuestions`; 

  constructor(private http: HttpClient) {}

  GetAllQuestions(): Observable<Questions[]> {
    const url = `${this.getAllQuestions}`;
    return this.http.get<Questions[]>(url);
  }
}

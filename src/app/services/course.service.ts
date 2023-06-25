import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { UploadFile } from '../models/upload-file';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private AddCourseUrl=`https://localhost:7137/api/Course/AddCourse`;

  constructor(private http : HttpClient) { }

  AddCourse(course:Course):Observable<void>
  {
    const url = `${this.AddCourseUrl}`;
    return this.http.post<void>(url , course);
  }
  public uploadImage(image: File): Observable<UploadFile> {
    var form = new FormData();
    form.append('file', image);

    return this.http.post<UploadFile>(
      'https://localhost:7137/api/File/UploadCourseImage',
      form
    );
  }
}

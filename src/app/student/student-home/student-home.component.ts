import { Component, OnInit } from '@angular/core';
import { GetReservation } from 'src/app/models/get-reservation';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit{
  cards: GetReservation[] = [];
  constructor(private studentService: StudentService, private authService: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      console.log(userId);
      this.studentService.getReservationForStudent(userId).subscribe(
      instructors => {
      this.cards = instructors;
    },
  );
  }
}
}

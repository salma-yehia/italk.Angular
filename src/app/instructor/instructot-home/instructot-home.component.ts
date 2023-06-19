import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorService } from 'src/app/services/instructor.service';
import jwt_decode from 'jwt-decode';
import { GetReservation } from 'src/app/models/get-reservation';

@Component({
  selector: 'app-instructot-home',
  templateUrl: './instructot-home.component.html',
  styleUrls: ['./instructot-home.component.css']
})
export class InstructotHomeComponent implements OnInit {
  cards: GetReservation[] = [];
  constructor(private instructorService: InstructorService, private authService: AuthService) {}
  ngOnInit(): void {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      console.log(userId);
      this.instructorService.getReservationForInstructor(userId).subscribe(
      students => {
      this.cards = students;
    },
  );
  }
}
}

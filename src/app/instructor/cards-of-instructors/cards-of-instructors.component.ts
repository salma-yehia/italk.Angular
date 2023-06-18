import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorService } from 'src/app/services/instructor.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-cards-of-instructors',
  templateUrl: './cards-of-instructors.component.html',
  styleUrls: ['./cards-of-instructors.component.css']
})
export class CardsOfInstructorsComponent implements OnInit {
  cards: Instructor[] = [];

  constructor(private instructorService: InstructorService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getInstructorsForLanguage(0);
  }

  selectOption(option: number, event: Event): void {
    event.preventDefault(); 
    this.getInstructorsForLanguage(option);
  }
  
  private getInstructorsForLanguage(option: number): void {
    let languageId: number;
    if (option == 1) {
      languageId = 1;
    } else if (option == 2) {
      languageId = 2;
    } else if (option == 3) {
      languageId = 3;
    } 
    else {
      languageId = option;
    }
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      console.log(userId);
    }    
    this.instructorService.getInstructorsForLanguage(languageId).subscribe(
      instructors => {
        this.cards = instructors;
      },
      // error => {
      //   console.error('Error fetching instructors:', error);
      // }
    );
  }

  enrollInstructor(instructorId: number,event: Event): void {
    event.preventDefault();
    this.authService.getUserId().subscribe(
      userId => {
        if (userId) {
          const reservation: Reservation = {
            studentId: userId,
            instructorId: instructorId,
            appointment: new Date()
          };
          console.log(reservation);
      
          this.instructorService.createReservation(reservation).subscribe(
            () => {
              console.log('Reservation created successfully!');
            },
            // error => {
            //   console.error('Error creating reservation:', error);
            // }
          );
        } else {
          // Handle the case where the user is not logged in or the ID is not available
        }
      }
    );
  }
}

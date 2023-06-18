import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-cards-of-instructors',
  templateUrl: './cards-of-instructors.component.html',
  styleUrls: ['./cards-of-instructors.component.css']
})
export class CardsOfInstructorsComponent implements OnInit {
  cards: Instructor[] = [];

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.getInstructorsForLanguage(0);
  }

  selectOption(option: number, event: Event): void {
    event.preventDefault(); // Prevent default behavior of the click event
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
      
      instructor => {
        this.cards = instructor;
      },
      
      // error => {
      //   console.error('Error fetching instructors:', error);
      // }
    );
    
  }
  enrollInstructor(instructorId: number): void {
    // Call the appropriate function in the InstructorService with the instructorId
    this.instructorService.getReservationForInstructor(instructorId).subscribe(
      
    );
  }

}

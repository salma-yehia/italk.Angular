import { Component } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-cards-of-instructors',
  templateUrl: './cards-of-instructors.component.html',
  styleUrls: ['./cards-of-instructors.component.css']
})
export class CardsOfInstructorsComponent {
  cards: any[] = [];
  instructor: Instructor = {} as Instructor;

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
   
    this.getReservationForInstructor(1);
  }

  selectOption(option: number): void {
    this.getReservationForInstructor(option);
  }

  private getReservationForInstructor(option: number): void {
 
    let languageId: number;
    if (option === 1) {
      languageId = 1;
    } else if (option === 2) {
      languageId = 2; 
    } else {
      languageId = 1; 
    }

    this.instructorService.getReservationForInstructor(languageId).subscribe(
      reservations => {
        this.cards = reservations;
      },
      // error => {
      //   console.error('Error fetching reservations:', error);
      // }
    );
  }

}

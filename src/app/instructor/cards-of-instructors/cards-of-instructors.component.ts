import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

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

  selectOption(option: number): void {
    this.getInstructorsForLanguage(option);
  }

  private getInstructorsForLanguage(option: number): void {
    let languageId: number;
    if (option === 1) {
      languageId = 1;
    } else if (option === 2) {
      languageId = 2;
    } 
    else {
      languageId = 1;
    }

    this.instructorService.getInstructorsForLanguage(languageId).subscribe(
      
      instructor => {
        this.cards = instructor;
        console.log(this.cards);
      },
      
      // error => {
      //   console.error('Error fetching instructors:', error);
      // }
    );
    console.log(option);
  }
}

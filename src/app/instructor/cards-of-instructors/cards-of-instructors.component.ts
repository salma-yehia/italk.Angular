import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorService } from 'src/app/services/instructor.service';
import jwt_decode from 'jwt-decode';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EnrollmentSuccessModelComponent } from 'src/app/student/enrollment-success-model/enrollment-success-model.component';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-cards-of-instructors',
  templateUrl: './cards-of-instructors.component.html',
  styleUrls: ['./cards-of-instructors.component.css'],
})
export class CardsOfInstructorsComponent implements OnInit {
  cards: Instructor[] = [];
  modalRef!: NgbModalRef;
  errorMessage:string="";

  constructor(private instructorService: InstructorService, private authService: AuthService, private modalService: NgbModal , private router:Router) {}

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
     
    this.instructorService.getInstructorsForLanguage(languageId).subscribe(
      instructors => {
        this.cards = instructors;
      },
      // error => {
      //   console.error('Error fetching instructors:', error);
      // }
    );
  }

  enrollInstructor(instructor: Instructor, event: Event): void {
      event.preventDefault();
      const token = localStorage.getItem('userToken');
      if (token) {
        const decodedToken: any = jwt_decode(token);
        const userId =
          decodedToken[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
          ];
        console.log(userId);
  
        const reservation: Reservation = {
          studentId: userId,
          instructorId: instructor.id,
          appointment: new Date(),
        };
        console.log(reservation);
        console.log(instructor);
  
        this.instructorService
          .createReservation(reservation)
          .pipe(
            switchMap(() => this.instructorService.checkAppointment(reservation))
          )
          .subscribe(
            (isAppointmentAvailable) => {
              if (isAppointmentAvailable) {
                console.log('Reservation created successfully!');
                console.log(reservation);
              } else {
                console.log('Appointment not available');
              }
            },
            (error) => {
              console.error('Error creating reservation:', error);
            }
          );
      }
    }
    
    openSuccessModal(): void {
        const modalRef = this.modalService.open(EnrollmentSuccessModelComponent , { centered: true });
      modalRef.result.then(
        () => {
          // Modal closed
          console.log('Modal closed');
        },
        () => {
          // Modal dismissed
          console.log('Modal dismissed');
        }
      );
      }
  getInstructorDetails(instructorId: number): void {
        this.instructorService.GetInstructorById(instructorId).subscribe({

        next: (data) => {
        console.log(data);
        
        // Redirect to /instructors/details route
        this.router.navigate(['/instructors/details', instructorId]);
      },
      error: (err) => this.errorMessage = err
    });
  }
}

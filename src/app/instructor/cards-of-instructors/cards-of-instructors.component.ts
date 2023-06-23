import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorService } from 'src/app/services/instructor.service';
import jwt_decode from 'jwt-decode';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EnrollmentSuccessModelComponent } from 'src/app/student/enrollment-success-model/enrollment-success-model.component';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EnrollmentFailurModelComponent } from 'src/app/student/enrollment-failur-model/enrollment-failur-model.component';
import { CheckAppointmentModelComponent } from 'src/app/student/check-appointment-model/check-appointment-model.component';

@Component({
  selector: 'app-cards-of-instructors',
  templateUrl: './cards-of-instructors.component.html',
  styleUrls: ['./cards-of-instructors.component.css'],
})
export class CardsOfInstructorsComponent implements OnInit {
  cards: Instructor[] = [];
  modalRef!: NgbModalRef;
  errorMessage: string = '';
  
  totalCount=0;
  page=1;
  countPerPage=10;

  constructor(
    private instructorService: InstructorService,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

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
    } else {
      languageId = option;
    }

    this.instructorService.getInstructorsForLanguage(languageId).subscribe(
      (instructors) => {
        this.cards = instructors;
      }
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
        appointment: instructor.appointment,
      };
      console.log(reservation);
      // console.log(instructor);

      this.instructorService .createReservation(reservation).subscribe(
          (response) => {
            if (response===userId) {
              console.log('Reservation created successfully!');
              console.log(reservation);
              this.openSuccessModal();
            } else {
              console.log('Appointment not available');
              this.checkAppointmentModal();
            }
          },
          (error) => {
            console.error('Error creating reservation:', error);
            this.openFailureModal();
          }
        );
    }
  }

  openSuccessModal(): void {
    const modalOptions = {
      centered: true,
    };

    this.modalRef = this.modalService.open(
      EnrollmentSuccessModelComponent,
      modalOptions
    );

    this.modalRef.result.then(
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
  openFailureModal(): void {
    const modalOptions = {
      centered: true,
    };

    this.modalRef = this.modalService.open(
      EnrollmentFailurModelComponent,
      modalOptions
    );

    this.modalRef.result.then(
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
  checkAppointmentModal(): void {
    const modalOptions = {
      centered: true,
    };

    this.modalRef = this.modalService.open(
      CheckAppointmentModelComponent,
      modalOptions
    );

    this.modalRef.result.then(
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
      error: (err) => (this.errorMessage = err),
    });
  }
  getCards(page:number)
  {
    
  }
}

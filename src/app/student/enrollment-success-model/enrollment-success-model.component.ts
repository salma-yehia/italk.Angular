import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enrollment-success-model',
  templateUrl: './enrollment-success-model.component.html',
  styleUrls: ['./enrollment-success-model.component.css'],
})
export class EnrollmentSuccessModelComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

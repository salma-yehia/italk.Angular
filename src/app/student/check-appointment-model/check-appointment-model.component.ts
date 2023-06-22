import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-appointment-model',
  templateUrl: './check-appointment-model.component.html',
  styleUrls: ['./check-appointment-model.component.css']
})
export class CheckAppointmentModelComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

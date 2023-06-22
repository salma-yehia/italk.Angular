import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-enrollment-failur-model',
  templateUrl: './enrollment-failur-model.component.html',
  styleUrls: ['./enrollment-failur-model.component.css']
})
export class EnrollmentFailurModelComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

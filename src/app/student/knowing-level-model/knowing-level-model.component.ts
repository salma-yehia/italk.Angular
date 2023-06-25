import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-knowing-level-model',
  templateUrl: './knowing-level-model.component.html',
  styleUrls: ['./knowing-level-model.component.css']
})
export class KnowingLevelModelComponent {
  @Input() level: string = '';
  constructor(public activeModal: NgbActiveModal) {}
}

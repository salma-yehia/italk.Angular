import { Instructor } from './instructor';
import { Student } from './student';

export interface Reservation {
  studentId: number;
  instructorId: number;
  appointment: Date;
}

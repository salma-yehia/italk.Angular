import { Instructor } from "./instructor";
import { Student } from "./student";

export interface Reservation {
        StudentId : number;
        InstructorId : number;
        Appointment : Date;
        Student : Student;
        Instructor : Instructor;
}

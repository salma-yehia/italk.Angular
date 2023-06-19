import { GetInstructor } from "./get-instructor";
import { GetStudent } from "./get-student";

export interface GetReservation {
        studentId: number;
        instructorId: number;
        appointment: Date;
        student: GetStudent | null;
        instructor: GetInstructor | null;
}

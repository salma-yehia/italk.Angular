import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit{
  instructor: Instructor = {} as Instructor ; 

  constructor(private route: ActivatedRoute,private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const instructorId = +params['id']; // Get the instructor ID from the route parameter

      this.instructorService.GetInstructorById(instructorId).subscribe(
        (data: Instructor) => {
          this.instructor = data;
          console.log(this.instructor);
        },
        (error: any) => {
          console.error('An error occurred while retrieving instructor details:', error);
        }
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Level } from 'src/app/models/level';
import { Questions } from 'src/app/models/questions';
import { QuestionsServiceService } from 'src/app/services/questions.service.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questions: Questions[] = [];
  degree : number = 0;
  studentId : number = 0;
  level : Level = {} as Level;
  errorMessage:string="";

  constructor(private studentService: StudentService , private questionService : QuestionsServiceService , private activatedRoute : ActivatedRoute , private router : Router) {}
  ngOnInit(): void {
      this.questionService.GetAllQuestions().subscribe(
      question => {
      this.questions = question;
      console.log(this.questions);
    },
  );
  this.activatedRoute.params.subscribe(params => {
     this.studentId = +params['id']; 
  })
}
  onOptionChange(questionId: number, optionIndex: number): void {
    for (let i = 0; i < this.questions.length; i++) {
      if (questionId ===1 && optionIndex ===4 ) {
          this.degree+=10;
      }
    }
  }
  submitExam(event: Event) {
    event.preventDefault();
    console.log(this.degree);
    if (this.degree === 10) {
      this.level.level = 'Beginner';
    }
    this.studentService.UpdateStudentLevel(this.studentId, this.level)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/students']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
      this.degree = 0;
  }
  } 


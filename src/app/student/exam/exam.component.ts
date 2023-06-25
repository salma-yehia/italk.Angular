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
  console.log('Initial degree:', this.degree);

  switch (questionId) {
    case 1:
      if (optionIndex === 1) {
        this.degree += 10;
        console.log('Question 1 answer is correct.');
      }
      break;
    case 2:
      if (optionIndex === 9) {
        this.degree += 10;
        console.log('Question 2 answer is correct.');
      }
      break;
    case 3:
      if (optionIndex === 12) {
        this.degree += 10;
        console.log('Question 3 answer is correct.');
      }
      break;
    case 4:
      if (optionIndex === 15) {
        this.degree += 10;
        console.log('Question 4 answer is correct.');
      }
      break;
    case 5:
      if (optionIndex === 18) {
        this.degree += 10;
        console.log('Question 5 answer is correct.');
      }
      break;
    case 6:
      if (optionIndex === 24) {
        this.degree += 10;
        console.log('Question 6 answer is correct.');
      }
      break;
    case 7:
      if (optionIndex === 28) {
        this.degree += 10;
        console.log('Question 7 answer is correct.');
      }
      break;
    case 8:
      if (optionIndex === 33) {
        this.degree += 10;
        console.log('Question 8 answer is correct.');
      }
      break;
    case 9:
      if (optionIndex === 36) {
        this.degree += 10;
        console.log('Question 9 answer is correct.');
      }
      break;
    case 10:
      if (optionIndex === 39) {
        this.degree += 10;
        console.log('Question 10 answer is correct.');
      }
      break;
    default:
      console.log('Invalid questionId or optionIndex.');
      break;
  }

  console.log('Updated degree:', this.degree);
}

  submitExam(event: Event) {
    event.preventDefault();
    if (this.degree <= 30) {
      this.level.level = 'Beginner';
    }
    if (this.degree >= 30 && this.degree <= 60) {
      this.level.level = 'Intermediate';
    }
    if (this.degree > 60 && this.degree <= 100) {
      this.level.level = 'Advanced';
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
      console.log(this.degree);

      this.degree = 0;
      console.log(this.degree);

  }
  } 


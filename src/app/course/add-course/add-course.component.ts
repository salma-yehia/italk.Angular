import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import jwt_decode from 'jwt-decode';

enum crsCategory {
  GeneralBasics = 1,
  Buisness = 2,
  Acadimic=3,
  ExamPrepation=4,
  ESP=5,
  Conversition=6,
}
enum level{
  A1=1,
  A2=2,
  B1=3,
  B2=4,
  C1=5,
  C2=6,
}
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  registerForm: FormGroup;
  addCourse:Course={} as Course;
  selectedLanguageId: string = "";
  imageUrl:String = '';
  languages: { id: number, name: string }[] = [
    { id: 1, name: 'English' },
    { id: 2, name: 'French' },
    { id: 3, name: 'Germany' },
  ];
  constructor(private fb:FormBuilder,private router : Router,private crsService:CourseService){
    this.registerForm=this.fb.group({
      Picture: new FormControl(null),
      Title : new FormControl(null , Validators.required ),
      Description: new FormControl(null),
      Price : new FormControl(null , [
        Validators.required 
      ]),
      NumOfPlaces:new FormControl(null,Validators.required),
      Appointment : new FormControl(null , [
        Validators.required 
      ]),
    CrsCategory: new FormControl(null),
    CrsLevel: new FormControl(null , [
      Validators.required 
    ]),
    InstructorId: new FormControl(null , [
      Validators.required 
    ]),
    LanguageId: new FormControl(null , [
      Validators.required 
    ]) ,

    });

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  get Title(){
    return this.registerForm.get('Title');
  }
  get Description(){
    return this.registerForm.get('Description');
  }
  get Price() {
    return this.registerForm.get('Price');  }
  get NumberOfPlaces(){
    return this.registerForm.get('NumOfPlaces');
  }
  get Appointment(){
    return this.registerForm.get('Appointment');
  }
  get  CourseCategory(){
    return this.registerForm.get('CrsCategory');
  }
  get  CourseLevel(){
    return this.registerForm.get('CrsLevel');
  }
  get Picture(){
    return this.registerForm.get('Picture');
  }
  get LanguageId(){
    return this.registerForm.get('LanguageId');
  }
  
  registerData(): void {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      console.log(userId);
    // this.addCourse.picture=this.
    this.addCourse.title=this.Title?.value;
    this.addCourse.appointment=this.Appointment?.value;
    this.addCourse.crsCategory=this.CourseCategory?.value;
    this.addCourse.crsLevel=this.CourseLevel?.value;
    this.addCourse.description=this.Description?.value;
    this.addCourse.picture=this.Picture?.value;
    this.addCourse.languageId=this.LanguageId?.value;
    this.addCourse.instructorId=userId;
    this.addCourse.numOfPlaces=this.NumberOfPlaces?.value;
    this.addCourse.price=this.Price?.value;
    console.log(this.addCourse)

    this.crsService.AddCourse(this.addCourse).subscribe({
      next: (data) => {
        console.log(data);
        
        // Redirect to /students route
        // this.router.navigate(['/students']);
      },
      // error: (err) => this.errorMessage = err
    });
    // console.log(this.registerStudent);
    
}

  }
  // registerStudent(registerStudent: any) {
  //   throw new Error('Method not implemented.');
  // }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (!file) return;
  
    this.crsService.uploadImage(file).subscribe((response) => {
      this.imageUrl = response.url;
      this.registerForm.patchValue({Picture: this.imageUrl});
  
      // Reset the file input
      input.value = '';
    });
  }
  crsCategoryEnum = crsCategory;
  crsCategoryValues = Object.keys(crsCategory).filter(k => !isNaN(+k));

  levelEnum= level;
  levelValues = Object.keys(level).filter(k => !isNaN(+k));



  isControlError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }
}



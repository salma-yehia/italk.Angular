import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

 

enum Gender {
  Male = 1,
  Female = 2,
}

@Component({
  selector: 'app-student-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})

export class InstructorRegisterComponent implements OnInit {
  registerInstructor:Instructor={} as Instructor;
  errorMessage:string="";
  
  selectedLanguageId: string = "";
  imageUrl:String = '';
  certUrl : String = '';
  languages: { id: number, name: string }[] = [
    { id: 1, name: 'English' },
    { id: 2, name: 'French' },
    { id: 3, name: 'Germany' },
  ];

  registerForm:FormGroup ;
  

  constructor(private fb:FormBuilder,private instructorService:InstructorService,private router : Router){
    this.registerForm=this.fb.group({
      UserName : new FormControl(null , [
        Validators.required , Validators.pattern(`^[A-Za-z0-9]*$`)
      ]),
      Gender : new FormControl(null , [
        Validators.required 
      ]),
      Email : new FormControl(null , [
        Validators.required , Validators.email
      ]),
      Degree : new FormControl(null , [
        Validators.required 
      ]),
      Password : new FormControl(null , [
        Validators.pattern(`.*[A-Za-z].*`) , Validators.required
      ]),
      Appointment : new FormControl(null , [
        Validators.required 
      ]),    
      Nationality : new FormControl(null , [
        Validators.required 
      ]),
      Descroption : new FormControl(null , [
        Validators.required 
      ]),
      Imgname : new FormControl<String>("" , [
        Validators.required 
      ]),
      Experience : new FormControl(null , [
        Validators.required 
      ]),
      TeachingCertificate : new FormControl(null , [
        Validators.required 
      ]),
      ExtraCourses : new FormControl(null , [
        Validators.required 
      ]),
      LanguageId : new FormControl(null , [
        Validators.required 
      ]),
    });

  }

  get UserName(){
    return this.registerForm.get('UserName');
  }
  get Email(){
    return this.registerForm.get('Email');
  }
  get Gender() {
    return this.registerForm.get('Gender');  }
  get Degree(){
    return this.registerForm.get('Degree');
  }
  get Password(){
    return this.registerForm.get('Password');
  }
  get Appointment(){
    return this.registerForm.get('Appointment');
  }
  get Nationality(){
    return this.registerForm.get('Nationality');
  }
  get Descroption(){
    return this.registerForm.get('Descroption');
  }
  get Imgname(){
    return this.registerForm.get('Imgname');
  }
  get Experience(){
    return this.registerForm.get('Experience');
  }
  get TeachingCertificate(){
    return this.registerForm.get('TeachingCertificate');
  }
  get ExtraCourses(){
    return this.registerForm.get('ExtraCourses');
  }
  get LanguageId(){
    return this.registerForm.get('LanguageId');
  }
  ngOnInit(): void {
  }

  registerData(e:Event): void {
    this.registerInstructor.userName=this.UserName?.value
    this.registerInstructor.gender=+this.Gender?.value
    this.registerInstructor.password=this.Password?.value
    this.registerInstructor.appointment=this.Appointment?.value
    this.registerInstructor.degree=this.Degree?.value
    this.registerInstructor.descroption=this.Descroption?.value
    this.registerInstructor.email=this.Email?.value
    this.registerInstructor.experience=this.Experience?.value
    this.registerInstructor.extraCourses=this.ExtraCourses?.value
    this.registerInstructor.imgName=this.Imgname?.value
    this.registerInstructor.nationality=this.Nationality?.value
    this.registerInstructor.teachingCertificate=this.TeachingCertificate?.value
    this.registerInstructor.languageId=this.LanguageId?.value

    this.instructorService.createInstructor(this.registerInstructor).subscribe({
      next: (data) => {
        console.log(data);
        
        // Redirect to /students route
        this.router.navigate(['/students']);
      },
      error: (err) => this.errorMessage = err
    });
  }

  genderEnum = Gender;
  genderValues = Object.keys(Gender).filter(k => !isNaN(+k));
  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (!file) return;
  
    this.instructorService.uploadImage(file).subscribe((response) => {
      this.imageUrl = response.url;
      this.registerForm.patchValue({ Imgname: this.imageUrl });
  
      // Reset the file input
      input.value = '';
    });
  }
  uploadCert(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (!file) return;
  
    this.instructorService.uploadCertificate(file).subscribe((response) => {
      this.certUrl = response.url;
      this.registerForm.patchValue({ TeachingCertificate: this.certUrl });
  
      // Reset the file input
      input.value = '';
    });
  }  
  
  
  
  
  
}

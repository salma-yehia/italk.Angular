import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/models/instructor';
import jwt_decode from 'jwt-decode';

enum Gender {
  Male = 1,
  Female = 2,
}
@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit{
  updateInstructor:Instructor={} as Instructor;
  errorMessage:string="";
  userId : number = 0;
  selectedLanguageId: string = "";
  imageUrl:String = '';
  certUrl : String = '';
  languages: { id: number, name: string }[] = [
    { id: 1, name: 'English' },
    { id: 2, name: 'French' },
    { id: 3, name: 'Germany' },
  ];
  updateForm:FormGroup ;

  constructor(private fb:FormBuilder,private instructorService:InstructorService,private router : Router){
    this.updateForm=this.fb.group({
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
    return this.updateForm.get('UserName');
  }
  get Email(){
    return this.updateForm.get('Email');
  }
  get Gender() {
    return this.updateForm.get('Gender');  }
  get Degree(){
    return this.updateForm.get('Degree');
  }
  get Password(){
    return this.updateForm.get('Password');
  }
  get Appointment(){
    return this.updateForm.get('Appointment');
  }
  get Nationality(){
    return this.updateForm.get('Nationality');
  }
  get Descroption(){
    return this.updateForm.get('Descroption');
  }
  get Imgname(){
    return this.updateForm.get('Imgname');
  }
  get Experience(){
    return this.updateForm.get('Experience');
  }
  get TeachingCertificate(){
    return this.updateForm.get('TeachingCertificate');
  }
  get ExtraCourses(){
    return this.updateForm.get('ExtraCourses');
  }
  get LanguageId(){
    return this.updateForm.get('LanguageId');
  }
  ngOnInit(): void {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      this.userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
}
  }

  updateData(e:Event): void {
    this.updateInstructor.userName=this.UserName?.value
    this.updateInstructor.gender=+this.Gender?.value
    this.updateInstructor.password=this.Password?.value
    this.updateInstructor.appointment=this.Appointment?.value
    this.updateInstructor.degree=this.Degree?.value
    this.updateInstructor.descroption=this.Descroption?.value
    this.updateInstructor.email=this.Email?.value
    this.updateInstructor.experience=this.Experience?.value
    this.updateInstructor.extraCourses=this.ExtraCourses?.value
    this.updateInstructor.imgName=this.Imgname?.value
    this.updateInstructor.nationality=this.Nationality?.value
    this.updateInstructor.teachingCertificate=this.TeachingCertificate?.value
    this.updateInstructor.languageId=this.LanguageId?.value

    this.instructorService.updateInstructorById(this.userId,this.updateInstructor).subscribe({
      next: (data) => {
        console.log(data);
        
        // Redirect to /students route
        this.router.navigate(['/instructors']);
      },
      error: (err) => this.errorMessage = err
    });
  }

  genderEnum = Gender;
  genderValues = Object.keys(Gender).filter(k => !isNaN(+k));
  
  isControlError(controlName: string, errorName: string): boolean {
    const control = this.updateForm.get(controlName);
    return control?.errors && control?.errors[errorName] && control?.touched;
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (!file) return;
  
    this.instructorService.uploadImage(file).subscribe((response) => {
      this.imageUrl = response.url;
      this.updateForm.patchValue({ Imgname: this.imageUrl });
  
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
      this.updateForm.patchValue({ TeachingCertificate: this.certUrl });
  
      // Reset the file input
      input.value = '';
    });
  }  
  
  

}

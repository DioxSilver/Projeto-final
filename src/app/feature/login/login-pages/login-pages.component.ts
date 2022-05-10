import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../components/page-teacher/service-teacher/school.service';

@Component({
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {

  error: boolean = false;

  email?: string;
  passeword?: string;


  constructor(
    private schoolService: SchoolService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  authenticate(){
    const teacher = this.schoolService.getSchoolByEmailAndPasseword(this.email,this.passeword)
   if (!teacher){
     this.error = false;
   } else{
      delete teacher.passeword;
      sessionStorage.setItem('teacher', JSON.stringify(teacher));


      
      const students = this.schoolService.getSchoolByEmailAndPasseword(this.email,this.passeword)
      if (!students){
        this.error = true;
      } else{
         delete students.passeword;
         sessionStorage.setItem('students', JSON.stringify(students));
      
     this.router.navigateByUrl('professores');
    }
  }

 }
}

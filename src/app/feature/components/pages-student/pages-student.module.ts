import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../../login/login.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentsComponent],
    exports:[StudentComponent,
      StudentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    
  ]
})
export class PagesStudentModule { }

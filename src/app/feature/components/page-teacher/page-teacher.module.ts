import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginModule } from '../../login/login.module';



@NgModule({
  declarations: [TeacherComponent,
  TeachersComponent],
  exports:[TeacherComponent,
    TeachersComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ],
})
export class PageTeacherModule { }

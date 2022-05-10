import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesTeacherComponent } from './pages-teacher/pages-teacher.component';
import { PagesStudentsComponent } from './pages-students/pages-students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesStudentModule } from '../components/pages-student/pages-student.module';
import { PageTeacherModule } from '../components/page-teacher/page-teacher.module';



@NgModule({
  declarations: [
    PagesTeacherComponent,
    PagesStudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesStudentModule,
    PageTeacherModule
  ]
})
export class PagesModule { }

import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../../model/models';
import { ServiceStudentService } from '../service-student/service-student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

 estudos: Array<TaskList> = this.studentsService.getALL();
 
  filteredStudents = this.estudos;

  constructor(private studentsService:ServiceStudentService) { }

  

  ngOnInit(): void {
  }
  filterStudents(event:any){
    const searchValue= event?.target.value;
  if(searchValue.length >0) {return this.filteredStudents = 
    this.estudos.filter((estudos)=> estudos.nome.toUpperCase().search(searchValue.toUpperCase()) > -1);
    }
    return this.filteredStudents = this.estudos;
  }
}

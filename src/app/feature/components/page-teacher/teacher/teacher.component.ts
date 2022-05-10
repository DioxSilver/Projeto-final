import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/feature/model/models';
import { SchoolService } from '../service-teacher/school.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  listas: Array<TaskList> = this.productService.getAll();

  filteredTeacher = this.listas;
  
  constructor(private productService: SchoolService) { }
  
  

  ngOnInit(): void {
  }
    filterTeacher(event:any){
      const searchValue= event?.target.value;
    if(searchValue.length >0) {return this.filteredTeacher = 
      this.listas.filter((listas)=> listas.nome.toUpperCase().search(searchValue.toUpperCase()) > -1);
      }
      return this.filteredTeacher = this.listas;
  }
    
} 

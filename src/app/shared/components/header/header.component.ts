import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskList } from 'src/app/feature/model/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  teacher?: TaskList;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const teacherStorage = sessionStorage.getItem('teacher');
    if(teacherStorage){
     this.teacher= JSON.parse(teacherStorage);
    }
  }
  navigateByUrl(Url:string){
    this.router.navigateByUrl(Url);
  }
  exit(){
    sessionStorage.clear();
    this.navigateByUrl('/login');
  }
  eventColor(){
  }

}

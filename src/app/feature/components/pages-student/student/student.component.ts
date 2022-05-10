import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../../model/models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input()
  student?:TaskList

  constructor() { }

  ngOnInit(): void {
  }

}

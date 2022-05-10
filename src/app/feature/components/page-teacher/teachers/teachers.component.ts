import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../../model/models';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  @Input()
  teacher?:TaskList

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  constructor( private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe( res => this.tasks = res );
  }

}

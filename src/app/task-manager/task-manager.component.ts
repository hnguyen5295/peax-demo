import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent implements OnInit, OnChanges {
  @Input() data: Task[] = [];

  displayData: Task = {
    id: '',
    title: '',
    content: '',
  };
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(change) {
    if (change) {
      this.displayData = this.data[0];
    }
  }
}

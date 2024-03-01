import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoGroupComponent } from './components/todo-group/todo-group/todo-group.component';
import { ToDoStatus, TodoItem } from './interfaces/todo-group.interface';
import { CommonModule } from '@angular/common';
import { TodoGroup } from './interfaces/todo-group.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoGroupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [{
      title: 'ToDo',
      items: [{
        title: 'Create Todo',
        description: 'Create Todo Angular',
        status: ToDoStatus.IN_PROGRESS
      },
      {
        title: 'Creating the second part',
        description: 'Create Refresh',
        status: ToDoStatus.NOT_STARTED
      },
      {
        title: 'Refresh and Go Web',
        description: 'regrgerg',
        status: ToDoStatus.DONE
      }
    ]
    }]
  }

  public addGroup():void {
    let tempGroup: TodoGroup = {
      title: '',
      items: []
    }

    this.todoGroups.push(tempGroup)
  }

  public handleChangeTitle (value: {value: string, index: number}): void {
    this.todoGroups[value.index].title = value.value
  }

  public handleDeletegroup(value: number) {
    this.todoGroups.splice(value, 1)
  }

  public handleNewItem(value: { item: TodoItem, index: number}) {
    this.todoGroups[value.index].items?.push(value.item)
  }

  public handleChangeDescription(value: { description: string, indexGroup: number, indexItem: number }) {
    this.todoGroups[value.indexGroup].items[value.indexItem].description = value.description;
  }

  public handleChangeStatus(value: {status: ToDoStatus, indexItem: number, groupIndex: number}): void{
    this.todoGroups[value.groupIndex].items[value.indexItem].status = value.status;
  }

}

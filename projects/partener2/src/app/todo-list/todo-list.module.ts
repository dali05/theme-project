import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "../../../../theme-manager/src/app/todo/todo.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {TodoListComponent} from "./todo-list.component";



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      }
    ])
  ]
})
export class TodoListModule { }

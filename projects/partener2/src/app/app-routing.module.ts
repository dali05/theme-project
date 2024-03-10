import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "../../../partener2/src/app/todo-list/todo-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/todo-list', pathMatch: 'full'},
  {path: 'todo-list',component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

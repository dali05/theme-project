import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { loadRemoteEntry } from '@angular-architects/module-federation';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { TodoListModule } from "../../../partener1/src/app/todo-list/todo-list.module";

const PARTENER1_APP_URL="http://localhost:4300/remoteEntry.js";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'todo-list1',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry:PARTENER1_APP_URL,
        remoteName: "partener1",
        exposedModule: "./TodoModule"
      }).then(m=> m.TodoListModule).catch(err => console.log(err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComArr = [HomeComponent];

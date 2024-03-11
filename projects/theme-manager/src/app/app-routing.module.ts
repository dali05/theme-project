import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {loadRemoteModule} from '@angular-architects/module-federation';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth.guard";

const PARTENER1_APP_URL="http://localhost:4300/remoteEntry.js";
const PARTENER2_APP_URL="http://localhost:4400/remoteEntry.js";

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'todo-list1',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry:PARTENER1_APP_URL,
        remoteName: "partener1",
        exposedModule: "./TodoListModule"
      }).then(m=> m.TodoListModule).catch(err => console.log(err));
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'todo-list2',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry:PARTENER2_APP_URL,
        remoteName: "partener2",
        exposedModule: "./TodoListModule"
      }).then(m=> m.TodoListModule).catch(err => console.log(err));
    },
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComArr = [HomeComponent];

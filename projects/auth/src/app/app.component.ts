import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth';
  username: string = "";
  password: string = "";


  login() {
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);


  }
}

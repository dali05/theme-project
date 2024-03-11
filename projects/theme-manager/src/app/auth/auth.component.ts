import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router) { }

  login() {
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    this.router.navigateByUrl('/home');


  }
}

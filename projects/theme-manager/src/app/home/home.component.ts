import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  protected username: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
      this.username = localStorage.getItem("username");
          if (!this.username) {
            this.router.navigateByUrl('/auth');
          }
    }

}

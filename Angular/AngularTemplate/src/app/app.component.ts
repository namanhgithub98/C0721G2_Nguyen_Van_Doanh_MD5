import { Component } from '@angular/core';
import {Student} from "../models/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTemplate';

  students: Student[] = [
    {name: "Nguyen Van A", gender: 0, point: 100},
    {name: "Nguyen Van B", gender: 1, point: 80},
    {name: "Nguyen Van C", gender: 2, point: 50},
    {name: "Nguyen Van D", gender: 0, point: 0},
  ]
}

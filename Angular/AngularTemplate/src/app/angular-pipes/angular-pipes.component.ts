import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataInput:string = "Tet Den roi moi Nguoi oi!";
  inputNumber:number = 0.01;
  money:number = 9;
  today:Date = new Date();
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  layers=[1,2,3,4,5,6];
  layeron=[];

  constructor() {}

  ngOnInit() {
  }

}
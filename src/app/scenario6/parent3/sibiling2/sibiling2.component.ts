import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sibiling2',
  templateUrl: './sibiling2.component.html',
  styleUrls: ['./sibiling2.component.css']
})
export class Sibiling2Component implements OnInit {
@Input() public parentData="";
  constructor() { }

  ngOnInit() {
  }

}

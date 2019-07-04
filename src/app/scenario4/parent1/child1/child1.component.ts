import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Output() public child=new EventEmitter();
public name="";
  constructor() { }

  ngOnInit() {
  }
  log1(value){
    this.name=value;
this.child.emit(value);
  }

}

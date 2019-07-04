import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css']
})
export class Sibiling1Component implements OnInit {
@Output() public child3 = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  fun2(value)
  {
    this.child3.emit(value);
  }

}

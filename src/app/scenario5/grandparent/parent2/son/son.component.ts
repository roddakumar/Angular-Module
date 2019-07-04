import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
@Output() public child1=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.child1.emit(value);
  }

}

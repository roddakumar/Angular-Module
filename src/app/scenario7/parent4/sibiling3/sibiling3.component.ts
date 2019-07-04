import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';
@Component({
  selector: 'app-sibiling3',
  templateUrl: './sibiling3.component.html',
  styleUrls: ['./sibiling3.component.css']
})
export class Sibiling3Component implements OnInit {

  constructor(private ref:ServiceService) { }

  ngOnInit() {
  }
  newMessage(value) {
    this.ref.changeMessage(value);
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';
@Component({
  selector: 'app-sibiling4',
  templateUrl: './sibiling4.component.html',
  styleUrls: ['./sibiling4.component.css']
})
export class Sibiling4Component implements OnInit {
public message="";
  constructor(private ref1:ServiceService) { }

  ngOnInit() {
    this.ref1.currentMessage.subscribe(message => this.message = message);
  }
  

}

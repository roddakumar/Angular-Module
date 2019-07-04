import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ParentComponent, ChildComponent
  ]
})
export class Scenario3Module { }

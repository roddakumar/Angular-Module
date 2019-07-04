import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule
  ],

  exports:[Component1Component]
})
export class Scenario1Module { }

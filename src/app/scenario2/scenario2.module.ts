import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [Component2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Component2Component]
})
export class Scenario2Module { }

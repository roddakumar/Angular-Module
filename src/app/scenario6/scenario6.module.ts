import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3Component } from './parent3/parent3.component';
import { Sibiling1Component } from './parent3/sibiling1/sibiling1.component';
import { Sibiling2Component } from './parent3/sibiling2/sibiling2.component';

@NgModule({
  declarations: [Parent3Component, Sibiling1Component, Sibiling2Component],
  imports: [
    CommonModule
  ],
  exports:[Parent3Component,Sibiling1Component,Sibiling2Component]
})
export class Scenario6Module { }

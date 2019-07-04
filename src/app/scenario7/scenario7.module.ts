import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent4Component } from './parent4/parent4.component';
import { Sibiling3Component } from './parent4/sibiling3/sibiling3.component';
import { Sibiling4Component } from './parent4/sibiling4/sibiling4.component';

@NgModule({
  declarations: [Parent4Component, Sibiling3Component, Sibiling4Component],
  imports: [
    CommonModule
  ],
  exports:[Parent4Component, Sibiling3Component, Sibiling4Component]
})
export class Scenario7Module { }

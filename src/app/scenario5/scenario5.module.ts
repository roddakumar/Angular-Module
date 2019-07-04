import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { Parent2Component } from './grandparent/parent2/parent2.component';
import { SonComponent } from './grandparent/parent2/son/son.component';

@NgModule({
  declarations: [GrandparentComponent, Parent2Component, SonComponent],
  imports: [
    CommonModule
  ],
  exports:[GrandparentComponent,Parent2Component,SonComponent]
})
export class Scenario5Module { }

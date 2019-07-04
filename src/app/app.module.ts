import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Scenario1Module} from './scenario1/scenario1.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Scenario2Module} from './scenario2/scenario2.module';
import {FormsModule} from '@angular/forms';
import {Scenario4Module} from './scenario4/scenario4.module';
import {Scenario3Module} from './scenario3/scenario3.module';
import {Scenario5Module} from './scenario5/scenario5.module';
import {Scenario6Module} from './scenario6/scenario6.module';
import {Scenario7Module} from './scenario7/scenario7.module';
import {ServiceService} from '../app/service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scenario1Module,
    Scenario2Module,
    FormsModule,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module,
    Scenario7Module

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

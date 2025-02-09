import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientInformationComponent } from './patient-information/patient-information.component';
import { StepperOverviewExample } from './lab-portal-stepper/lab-portal-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInformationComponent,
    StepperOverviewExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

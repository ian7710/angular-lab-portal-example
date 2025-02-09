import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperOverviewExample } from './lab-portal-stepper/lab-portal-stepper.component';

export const routes: Routes = [
  { path: '', component: StepperOverviewExample }, // Default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabPortalComponent } from './lab-portal/lab-portal.component';

export const routes: Routes = [
  { path: '', component: LabPortalComponent }, // Default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


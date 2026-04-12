import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
    { path: 'doctors', component: DoctorsListComponent },

  { path: 'appointment', component: AppointmentFormComponent },

  { path: '', redirectTo: 'doctors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

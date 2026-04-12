import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
 patientName: string = ''
 isFormValid: boolean = false

 showData (e:any){
  this.patientName=e.target.value

  
 }
   checkForm() {
    this.isFormValid = this.patientName.length > 2;
  }
  
}

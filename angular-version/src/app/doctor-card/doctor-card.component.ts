import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {
@Input () doctor!: Doctor
@Output() selectDoctor = new EventEmitter()
select(){
  this.selectDoctor.emit(this.doctor)
}
}

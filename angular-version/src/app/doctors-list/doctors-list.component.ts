import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[] = [];

  // 1️⃣ Inject DoctorsService
  // constructor(private _doctorsService: DoctorsService) {}
   constructor(private doctorsService: DoctorsService) {}

  // 2️⃣ Load data in ngOnInit
  ngOnInit(): void { 
    this.doctors = this.doctorsService.getBySpecialty('All')
    
  }

  onDoctorSelected(doctor: Doctor) {
  console.log("Selected:", doctor);
}

}

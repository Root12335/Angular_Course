import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {
  students: IStudent[] = [
    { name: 'Amr Abokhald', age: 22, photoUrl: 'images/2.png' },
    
  ];
}

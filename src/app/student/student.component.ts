import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent{

  viewMode = 'map';

  constructor(private studentService : StudentService) { }

  addStudent(formObect){
    //let student = JSON.stringify(formObect.value);
    alert(JSON.stringify(formObect.value));
    this.studentService.addStudent(formObect.value);
  }

  getAllStudents(){
    this.studentService.getAllStudents();
  }

}

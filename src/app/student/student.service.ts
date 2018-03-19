import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  addStudent(student) {
    let url = "http://localhost:8081/students";
    this.httpClient.post(url, student)
      .subscribe(
      response => alert(response), 
      error => new Error('Error occured while addind student.')   
      )
  }

  getAllStudents() {
    let url = "http://localhost:8081/students";
    this.httpClient.get(url)
      .subscribe(
      data => alert(JSON.stringify(data)),
      error => new Error('Error occured while retriving student data.')   
      )
  }

}

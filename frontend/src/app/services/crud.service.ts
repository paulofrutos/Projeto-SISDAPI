import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Class } from '../Models/class.model';
import { Student } from './../Models/student.model';

@Injectable({ providedIn: 'root' })

export class CrudService {

  studentUrl = 'http://localhost:3001/students';
  classUrl = 'http://localhost:3001/classes';

  constructor( private snackbar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student)
  };

  createClass(classes: Class): Observable<Class> {
    return this.http.post<Class>(this.classUrl, classes)
  }


}

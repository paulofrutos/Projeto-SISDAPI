import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

  showMessage(msg: string , isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro.' , true);
    return EMPTY;
  }

  // ============================== Student Methods ============================== //

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  };

  readStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readStudentById(id: String): Observable<Student> {
    const url = `${this.studentUrl}/${id}`
    return this.http.get<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateStudent(student: Student): Observable<Student> {
    const url = `${this.studentUrl}/${student.id}`
    return this.http.put<Student>(url , student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.studentUrl}/${student.id}`;
    return this.http.delete<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // ============================== Class Methods ============================== //

  createClass(classes: Class): Observable<Class> {
    return this.http.post<Class>(this.classUrl, classes).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  };

  readClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  readClassById(id: String): Observable<Class> {
    const url = `${this.classUrl}/${id}`
    return this.http.get<Class>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  updateClass(classes: Class): Observable<Class> {
    const url = `${this.classUrl}/${classes.id}`
    return this.http.put<Class>(url , classes).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteClass(classes: Class): Observable<Class> {
    const url = `${this.classUrl}/${classes.id}`;
    return this.http.delete<Class>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

}

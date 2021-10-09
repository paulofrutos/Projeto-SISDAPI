import { StudentService } from './../student.service';
import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = {
    nome: '',
    sobrenome: ''
  }

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void { }

  createStudent(): void {
    this.studentService.create(this.student).subscribe(() => {
      this.studentService.showMessage('Operação executada com sucesso.')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }

}

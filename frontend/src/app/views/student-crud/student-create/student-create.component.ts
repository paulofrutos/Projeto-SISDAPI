import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student.model';
import { CrudService } from 'src/app/services/crud.service';

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

  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit(): void { }

  createStudent(): void {
    this.crudService.createStudent(this.student).subscribe(() => {
      this.crudService.showMessage('Operação executada com sucesso.')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }

}

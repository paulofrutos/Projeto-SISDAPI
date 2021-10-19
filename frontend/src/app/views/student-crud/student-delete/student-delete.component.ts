import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/Models/class.model';
import { Student } from 'src/app/Models/student.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})

export class StudentDeleteComponent implements OnInit {

  student!: Student;
  class!: Class;

  constructor(private router: Router,
              private crudService: CrudService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.crudService.readStudentById(id).subscribe(student => {
      this.student = student;
    })
  }

  deleteStudent(): void {
    this.crudService.deleteStudent(this.student).subscribe( () => {
      this.crudService.showMessage('Aluno excluído com sucesso !');
      this.router.navigate(['/students']);
    })
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }

}

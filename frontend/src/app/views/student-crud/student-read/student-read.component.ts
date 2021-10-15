import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/Models/student.model';


@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {

  students: Student[] = [];
  displayedColumns = ['id' , 'nomeCompleto' , 'cpf' , 'action'];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.readStudent().subscribe( students => {
      this.students = students;
    })
  }

}

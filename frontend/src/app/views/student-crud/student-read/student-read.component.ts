import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {

  students: Student[] = [];
  displayedColumns = ['id' , 'nomeCompleto' , 'cpf' , 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.readStudent().subscribe( (response:any) => {
      this.dataSource = new MatTableDataSource(response);
    })
  }

  filterData($event: any): void {
    this.dataSource.filter = $event.target.value;
  }

}

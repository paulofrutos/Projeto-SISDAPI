import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/Models/class.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-class-read',
  templateUrl: './class-read.component.html',
  styleUrls: ['./class-read.component.css']
})
export class ClassReadComponent implements OnInit {

  classes: Class[] = []; 
  displayedColumns = ['id' , 'nome' , 'professor' , 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.readClass().subscribe( (response:any) => {
      this.dataSource = new MatTableDataSource(response);
    })
  }

  filterData($event: any): void {
    this.dataSource.filter = $event.target.value;
  }

}

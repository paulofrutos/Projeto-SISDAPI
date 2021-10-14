import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/Models/class.model';


@Component({
  selector: 'app-class-read',
  templateUrl: './class-read.component.html',
  styleUrls: ['./class-read.component.css']
})
export class ClassReadComponent implements OnInit {

  classes: Class[] = [];
  displayedColumns = ['id' , 'nome' , 'professor' , 'action'];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.readClass().subscribe( classes => {
      this.classes = classes;
      console.log(classes)
    })
  }

}

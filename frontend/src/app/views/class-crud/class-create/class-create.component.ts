import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/Models/class.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})

export class ClassCreateComponent implements OnInit {

  public classes: Class = {
    professor: '',
    nome: ''
  }

  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit(): void { }

  createClass(): void {
    this.crudService.createClass(this.classes).subscribe(() => {
      this.crudService.showMessage('Operação executada com sucesso.')
      this.router.navigate(['/classes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/classes']);
  }

}

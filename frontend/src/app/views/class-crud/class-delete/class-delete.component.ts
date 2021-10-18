import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/Models/class.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-class-delete',
  templateUrl: './class-delete.component.html',
  styleUrls: ['./class-delete.component.css']
})
export class ClassDeleteComponent implements OnInit {

  classes!: Class;

  constructor(private router: Router,
              private crudService: CrudService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.crudService.readClassById(id).subscribe(classes => {
      this.classes = classes;
    })
  }

  deleteClass(): void {
    this.crudService.deleteClass(this.classes).subscribe( () => { 
      this.crudService.showMessage('Turma excluída com sucesso !');
      this.router.navigate(['/classes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/classes']);
  }

}

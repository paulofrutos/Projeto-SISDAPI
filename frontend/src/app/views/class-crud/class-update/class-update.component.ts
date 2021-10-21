import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/Models/class.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-class-update',
  templateUrl: './class-update.component.html',
  styleUrls: ['./class-update.component.css']
})
export class ClassUpdateComponent implements OnInit {

  classes!: Class;

  constructor(private router: Router,
              private crudService: CrudService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readClassById(id!).subscribe(classes => {
      this.classes = classes;
    })

  }

  updateClass(){
    this.crudService.updateClass(this.classes).subscribe( () => {
      this.crudService.showMessage('Cadastro da turma atualizado com sucesso !');
      this.router.navigate(['/classes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/classes']);
  }


}

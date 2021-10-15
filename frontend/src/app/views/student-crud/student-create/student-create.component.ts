import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/Models/class.model';
import { Student } from 'src/app/Models/student.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})

export class StudentCreateComponent implements OnInit {

  student: Student = {
    nomeCompleto: '',
    cpf: '',
    identidade: '',
    emissaoDaIdentidade: '',
    orgaoExpedidorDaIdentidade: '',
    dataDeNascimento: '',
    idade: 0,
    cidadeDeNascimento: '',
    estadoDeNascimento: '',
    nomeDoPai: '',
    nomeDaMae: '',
    religiao: '',
    tipoSanguineo: '',
    numeroCelular: '',
    numeroResidencial: '',
    numeroDeFamiliar: '',
    email: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    grauDeFormacao: '',
    anoDeConclusao: '',
    nomeDaEscola: '',
    profissaoDoPai: '',
    profissaoDaMae: '',
    rendaFamiliar: ''
  };

  class: Class = {
    nome: '',
    professor: ''
  }

  constructor(private crudService: CrudService,
              private router: Router) { }

  ngOnInit() { } 

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

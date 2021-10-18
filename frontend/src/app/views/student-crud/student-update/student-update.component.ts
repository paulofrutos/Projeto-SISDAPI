import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Class } from 'src/app/Models/class.model';
import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

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

  constructor(private router: Router,
              private crudService: CrudService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.crudService.readStudentById(id!).subscribe(student => {
      this.student = student;
    });
  }

  updateStudent(){
    this.crudService.updateStudent(this.student).subscribe(() => {
      this.crudService.showMessage('Cadastro do aluno atualizado com sucesso !');
      this.router.navigate(['/students']);
    })
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }

}

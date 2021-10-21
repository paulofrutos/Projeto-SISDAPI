package com.projeto.entra21.APIprojeto.service;

import com.projeto.entra21.APIprojeto.entity.Student;
import com.projeto.entra21.APIprojeto.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> listStudent() {
        return repository.findAll();
    }

    public Student search(int id) { return repository.findById(id).orElse(null);
    }

    public Student add(Student student) {
        return repository.save(student);
    }

    public void update(int id, Student student){
        Student studentUpdated = repository.getById(id);
        studentUpdated.setNomeCompleto(student.getNomeCompleto());
        studentUpdated.setCpf(student.getCpf());
        studentUpdated.setIdentidade(student.getIdentidade());
        studentUpdated.setEstadoDeNascimento(student.getEstadoDeNascimento());
        studentUpdated.setEmissaoDaIdentidade(student.getEmissaoDaIdentidade());
        studentUpdated.setOrgaoExpedidorDaIdentidade(student.getOrgaoExpedidorDaIdentidade());
        studentUpdated.setNomeDoPai(student.getNomeDoPai());
        studentUpdated.setNomeDaMae(student.getNomeDaMae());
        studentUpdated.setDataDeNascimento(student.getDataDeNascimento());
        studentUpdated.setCidadeDeNascimento(student.getCidadeDeNascimento());
        studentUpdated.setIdade(student.getIdade());
        studentUpdated.setReligiao(student.getReligiao());
        studentUpdated.setTipoSanguineo(student.getTipoSanguineo());
        studentUpdated.setNumeroCelular(student.getNumeroCelular());
        studentUpdated.setNumeroResidencial(student.getNumeroResidencial());
        studentUpdated.setNumeroDeFamiliar(student.getNumeroDeFamiliar());
        studentUpdated.setEmail(student.getEmail());
        studentUpdated.setCep(student.getCep());
        studentUpdated.setRua(student.getRua());
        studentUpdated.setBairro(student.getBairro());
        studentUpdated.setCidade(student.getCidade());
        studentUpdated.setEstado(student.getEstado());
        studentUpdated.setGrauDeFormacao(student.getGrauDeFormacao());
        studentUpdated.setAnoDeConclusao(student.getAnoDeConclusao());
        studentUpdated.setNomeDaEscola(student.getNomeDaEscola());
        studentUpdated.setProfissaoDoPai(student.getProfissaoDoPai());
        studentUpdated.setProfissaoDaMae(student.getProfissaoDaMae());
        studentUpdated.setRendaFamiliar(student.getRendaFamiliar());
        repository.save(studentUpdated);
    }

    public void delete(int id) {
        Optional<Student> studentdeleted = repository.findById(id);
        if (studentdeleted.isPresent()) {
            repository.deleteById(id);
        }

    }

}

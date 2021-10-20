package com.projeto.entra21.APIprojeto.service;

import com.projeto.entra21.APIprojeto.entity.Aluno;
import com.projeto.entra21.APIprojeto.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public List<Aluno> listar() {
        return repository.findAll();
    }

    public Aluno buscar(int id) { return repository.findById(id).orElse(null);
    }

    public Aluno add(Aluno a) {
        return repository.save(a);
    }

    public void update(int id, Aluno aluno){
        Aluno alunoAtualizado = repository.getById(id);
        alunoAtualizado.setNomeCompleto(aluno.getNomeCompleto());
        alunoAtualizado.setCpf(aluno.getCpf());
        alunoAtualizado.setIdentidade(aluno.getIdentidade());
        alunoAtualizado.setDataEmissaoDaIdentidade(aluno.getDataEmissaoDaIdentidade());
        alunoAtualizado.setOrgaoExpedidorDaIdentidade(aluno.getOrgaoExpedidorDaIdentidade());
        alunoAtualizado.setNomeDoPai(aluno.getNomeDoPai());
        alunoAtualizado.setNomeDaMae(aluno.getNomeDaMae());
        alunoAtualizado.setDataDeNascimento(aluno.getDataDeNascimento());
        alunoAtualizado.setCidadeDeNascimento(aluno.getCidadeDeNascimento());
        alunoAtualizado.setIdade(aluno.getIdade());
        alunoAtualizado.setReligiao(aluno.getReligiao());
        alunoAtualizado.setTipoSanguineo(aluno.getTipoSanguineo());
        alunoAtualizado.setNumeroCelular(aluno.getNumeroCelular());
        alunoAtualizado.setNumeroResidencial(aluno.getNumeroResidencial());
        alunoAtualizado.setNumeroDeFamiliar(aluno.getNumeroDeFamiliar());
        alunoAtualizado.setEmail(aluno.getEmail());
        alunoAtualizado.setCep(aluno.getCep());
        alunoAtualizado.setRua(aluno.getRua());
        alunoAtualizado.setBairro(aluno.getBairro());
        alunoAtualizado.setCidade(aluno.getCidade());
        alunoAtualizado.setEstado(aluno.getEstado());
        alunoAtualizado.setEnsinoMedioSuperior(aluno.getEnsinoMedioSuperior());
        alunoAtualizado.setAnoDeConclusaoEscola(aluno.getAnoDeConclusaoEscola());
        alunoAtualizado.setEscolaOndeConcluiu(aluno.getEscolaOndeConcluiu());
        alunoAtualizado.setProfissaoDoPai(aluno.getProfissaoDoPai());
        alunoAtualizado.setProfissaoDaMae(aluno.getProfissaoDaMae());
        alunoAtualizado.setRendaFamiliar(aluno.getRendaFamiliar());
        repository.save(alunoAtualizado);
    }

    public void deletar(int id) {
        Optional<Aluno> alunoDeletado = repository.findById(id);
        if (alunoDeletado.isPresent()) {
            repository.deleteById(id);
        }

    }

}

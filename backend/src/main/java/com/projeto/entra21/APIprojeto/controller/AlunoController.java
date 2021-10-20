package com.projeto.entra21.APIprojeto.controller;

import com.projeto.entra21.APIprojeto.entity.Aluno;
import com.projeto.entra21.APIprojeto.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping(value = "/aluno")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @GetMapping
    public List<Aluno> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Aluno listarPorId (@PathVariable int id){return service.buscar(id);}

    @PostMapping
    public Aluno salvar(@RequestBody Aluno a) {
        return service.add(a);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deletar(id);
    }

    @Transactional
    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody Aluno aluno) {
        service.update(id, aluno);
    }

}


package com.projeto.entra21.APIprojeto.controller;

import com.projeto.entra21.APIprojeto.entity.Class;
import com.projeto.entra21.APIprojeto.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/class")
public class ClassController {

    @Autowired
    private ClassService service;

    @GetMapping
    public List<Class> list() {
        return service.listClass();
    }

    @GetMapping("/{id}")
    public Class listById (@PathVariable int id){return service.searchById(id);}

    @PostMapping
    public Class save(@RequestBody Class turma) {
        return service.add(turma);
    }

    @Transactional
    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody Class turma) {
        service.update(id, turma);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }

}

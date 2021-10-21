package com.projeto.entra21.APIprojeto.controller;

import com.projeto.entra21.APIprojeto.entity.Student;
import com.projeto.entra21.APIprojeto.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping(value = "/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> list() {
        return service.listStudent();
    }

    @GetMapping("/{id}")
    public Student listById (@PathVariable int id){return service.search(id);}

    @PostMapping
    public Student save(@RequestBody Student student) {
        return service.add(student);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }

    @Transactional
    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody Student student) {
        service.update(id, student);
    }

}


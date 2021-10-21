package com.projeto.entra21.APIprojeto.service;

import com.projeto.entra21.APIprojeto.entity.Class;
import com.projeto.entra21.APIprojeto.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {

    @Autowired
    private ClassRepository repository;

    public List<Class> listClass() {
        return repository.findAll();
    }

    public Class searchById(int id) { return repository.findById(id).orElse(null);
    }

    public Class add( Class turma){
        return repository.save(turma);
    }

    public void delete(int id) {
        Optional<Class> classDeleted = repository.findById(id);
        if (classDeleted.isPresent()) {
            repository.deleteById(id);
        }
    }

    public void update(int id, Class turma){
        Class classUpdated = repository.getById(id);
        classUpdated.setNome(turma.getNome());
        classUpdated.setProfessor(turma.getProfessor());
        repository.save(classUpdated);
    }

}

package com.projeto.entra21.APIprojeto.repository;

import com.projeto.entra21.APIprojeto.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer>{

}
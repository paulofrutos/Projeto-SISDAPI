package com.projeto.entra21.APIprojeto.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String nomeCompleto;

    @Column
    private String cpf;

    @Column
    private String identidade;

    @Column(name = "estadoDeNascimento")
    private String estadoDeNascimento;

    @Column(name = "emissaoDaIdentidade")
    private String emissaoDaIdentidade;

    @Column
    private String orgaoExpedidorDaIdentidade;

    @Column
    private String nomeDoPai;

    @Column
    private String nomeDaMae;

    @Column
    private String dataDeNascimento;

    @Column
    private String cidadeDeNascimento;

    @Column
    private int idade;

    @Column
    private String religiao;

    @Column
    private String tipoSanguineo;

    @Column
    private String numeroCelular;

    @Column
    private String numeroResidencial;

    @Column
    private String numeroDeFamiliar;

    @Column
    private String email;

    @Column
    private int cep;

    @Column
    private String rua;

    @Column
    private String bairro;

    @Column
    private String cidade;

    @Column
    private String estado;

    @Column
    private String grauDeFormacao;

    @Column
    private String anoDeConclusao;

    @Column
    private String nomeDaEscola;

    @Column
    private String profissaoDoPai;

    @Column
    private String profissaoDaMae;

    @Column
    private int rendaFamiliar;
}
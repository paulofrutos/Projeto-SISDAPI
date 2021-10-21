export interface Student {
    id?: number
    nomeCompleto: string
    cpf: string
    identidade: String
    emissaoDaIdentidade: String
    orgaoExpedidorDaIdentidade: String

    nomeDoPai: String
    nomeDaMae: String
    dataDeNascimento: String
    cidadeDeNascimento: String
    estadoDeNascimento: String
    idade: String
    religiao: String
    tipoSanguineo: String

    numeroCelular: String
    numeroResidencial: String
    numeroDeFamiliar: String
    email: String

    cep: String
    rua: String
    bairro: String
    cidade: String
    estado: String

    grauDeFormacao: String
    anoDeConclusao: String
    nomeDaEscola: String

    profissaoDoPai: String
    profissaoDaMae: String
    rendaFamiliar: String

    nomeDaTurma: string
    professor: string
}
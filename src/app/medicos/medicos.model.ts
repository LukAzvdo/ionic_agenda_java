export interface Medico {
    id: number;
    nome: string;
    especialidade: Especialidade;
    crm: number;
    uf: UF;
    telefone: string;
}

export enum Especialidade {
    clinica_medica = 'Clinica Medica',
    ortopedia = 'Ortopedia',
    ginecologia = 'Ginecologia',
    pediatria = 'Pediatria',
    outros = 'Outros',
}

export enum UF {
    RS = 'Rio Grande do Sul',
    SC = 'Santa Catarina',
    PR = 'Paraná',
    SP = 'São Paulo',
    RJ = 'Rio de Janeiro',
}
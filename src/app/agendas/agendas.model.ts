import { Medico } from "../medicos/medicos.model";
import { Paciente } from "../pacientes/pacientes.model";
import { Procedimento } from "../procedimentos/procedimentos.model";

export interface Agenda {
    id: number;
    descricao: string;
    data: Date;
    medico: Medico[];
    paciente: Paciente[];
    procedimetos: Procedimento[];
}

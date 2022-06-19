import { Time } from "@angular/common";
import { Procedimento } from "../procedimentos/procedimentos.model";

export interface Agenda {
    id: number;
    descricao: string;
    medico: string;
    procedimetos: Procedimento[];
    data: Date;
    hora: string;
}

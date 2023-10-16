export class FormsCompromissoViewModel {
    assunto: string;
    tipoLocal: number;
    link: string;
    local: string;
    data: Date;
    horaInicio: string;
    horaTermino: string;
    nomeContato?: string;

    constructor(
      assunto: string,
      data: Date,
      tipoLocal: number,
      link: string,
      local: string,
      horaInicio: string,
      horaTermino: string,
      contato: string
    ) {
      this.assunto = assunto,
      this.data = data,
      this.tipoLocal = tipoLocal,
      this.link = link,
      this.local = local,
      this.horaInicio = horaInicio,
      this.horaTermino = horaTermino,
      this.nomeContato = contato
    }
  }
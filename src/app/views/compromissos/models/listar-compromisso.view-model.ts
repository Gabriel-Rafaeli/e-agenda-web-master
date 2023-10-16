export class ListarCompromissosViewModel{
    id: string;
    assunto: string;
    tipoLocal: number;
    data: Date;
    link: string;
    local: string;
    horaInicio: string;
    horaTermino: string;
    nomeContato: string;
  
    constructor(
      id: string,
      assunto: string,
      tipoLocal: number,
      data: Date,
      link: string,
      local: string,
      horaInicio: string,
      horaTermino: string,
      contato: string
      ) 
      {
        this.id = id,
        this.tipoLocal = tipoLocal,
        this.assunto = assunto,
        this.data = data,
        this.link = link,
        this.local = local,
        this.horaInicio = horaInicio,
        this.horaTermino= horaTermino,
        this.nomeContato = contato
      }
  }
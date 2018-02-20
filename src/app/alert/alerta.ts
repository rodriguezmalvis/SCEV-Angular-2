
export class Alerta{

    header: String
    tipo: String
    message: Object

    novaAlerta(header: String, tipo: String, message: Object){

        this.tipo = tipo;
        this.message = message;
        this.header = header;

    }

}
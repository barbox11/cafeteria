import Usuario from "./Usuario.ts";

interface UsuarioConstructor{
    id: number | null;
    usuario: Usuario;
    fechaUltimaVisita: Date | null;
}

export default class Cliente{
    public id: number | null;
    public usuario: Usuario;
    public fechaUltimaVisita: Date | null;

    constructor(params: UsuarioConstructor){
        this.id = params.id;
        this.usuario = params.usuario;
        this.fechaUltimaVisita = params.fechaUltimaVisita;
    }

    public actualizarFechaUltimaVisita(): void{
        // para construir este pedazo me hace falta factura
    }
}

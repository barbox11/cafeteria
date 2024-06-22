enum EstadoUsuario {
    HABILITADO,
    DESHABILITADO
}

export interface UsuarioConstructor {
    id: number | null;
    fechaCreacion: Date | number;
    estado: EstadoUsuario | number;
    nombres: string;
    apellidos: string;
    cedula: number;
    correo: string;
    telefono: string;
}

export default class Usuario{
    public id: number | null;
    public fechaCreacion: Date | number;
    public estado: EstadoUsuario | number;
    public nombres: string;
    public apellidos: string;
    public cedula: number;
    public correo: string;
    public telefono: string;

    constructor(params: UsuarioConstructor){
        this.id = params.id;
        if(params.fechaCreacion instanceof Date){ //Condicional para determinar isntancceof(si el tipo de dato es Date)
            this.fechaCreacion= params.fechaCreacion;
        }else{
            this.fechaCreacion = new Date (params.fechaCreacion); //Formateo en tipo Dte la fecha de creacion
        }
        this.estado = params.estado;
        this.nombres = params.nombres;
        this.cedula = params.cedula;
        this.correo = params.correo;
        this.telefono = params.telefono;
    }
}
import Usuario, {UsuarioConstructor} from './Usuario.ts';
import { hashContrasena } from './utils/contrasena.ts';

export interface usuarioAutenticableConstructor extends UsuarioConstructor{
    fechaUltimaSesion: Date | number;
    contrasena: string;
    forzarCambioConstrasena: boolean;

}

export default class UsuarioAutenticable extends Usuario{
    public fechaUltimaSesion: Date;
    private contrasena: string;
    protected forzarCambioConstrasena: boolean;

    constructor(params: usuarioAutenticableConstructor){
        super(params);

        if(params.fechaUltimaSesion instanceof Date){
            this.fechaUltimaSesion = params.fechaUltimaSesion;
        }else{
            this.fechaUltimaSesion = new Date(params.fechaUltimaSesion);
        }
        this.contrasena = '';
        this.asignarContrasena(params.contrasena);
        this.forzarCambioConstrasena = params.forzarCambioConstrasena;
    }

    private async asignarContrasena(contrasena: string){
        this.contrasena = await hashContrasena(contrasena);
    }

    public async cambiarContrasena(contrasenaActual: string, nuevaContrasena: string){
        if(await hashContrasena(contrasenaActual) == this.contrasena){
            this.asignarContrasena(nuevaContrasena);
            return;
        }
        throw new Error('La contraseña es incorrecta');
    }

    public forzarElCambioContrasena(){
        this.forzarCambioConstrasena = true;
    }

}
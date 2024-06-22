import UsuarioAutenticable, {usuarioAutenticableConstructor} from "./UsuarioAutenticable.ts";

export default class Administrador extends UsuarioAutenticable{
    constructor(params:usuarioAutenticableConstructor){
        super(params);
    }
}
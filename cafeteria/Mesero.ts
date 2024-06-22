import UsuarioAutenticable, {usuarioAutenticableConstructor} from "./UsuarioAutenticable.ts";

export default class Mesero extends UsuarioAutenticable{
    constructor(params:usuarioAutenticableConstructor){
        super(params);
    }
}
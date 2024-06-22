import UsuarioAutenticable, {usuarioAutenticableConstructor} from "./UsuarioAutenticable.ts";

export default class Barista extends UsuarioAutenticable{
    constructor(params:usuarioAutenticableConstructor){
        super(params);
    }
}
import Pedido from "./Pedido.ts";
import UsuarioAutenticable from "./UsuarioAutenticable.ts";
import Cliente from "./Cliente.ts";

export interface FacturaConstructor{
    id: number | null;
    pedido: Pedido;
    cajero: UsuarioAutenticable;
    cliente: Cliente;
    fechaCracion: Date | number;
    valorNeto: number;
    iva: number;
}

export default class Factura{
    public id: number | null;
    public pedido: Pedido;
    public cajero: UsuarioAutenticable;
    public Cliente: Cliente;
    public fechaCracion: Date | number;
    public valorNeto: number;
    public iva: number;

    constructor(params: FacturaConstructor){
        this.id = params.id;
        this.pedido = params.pedido;
        this.cajero = params.cajero;
        this.Cliente =  params.cliente;
        if(params.fechaCracion instanceof Date){
            this.fechaCracion = params.fechaCracion;
        }else{
            this.fechaCracion = new Date(params.fechaCracion);
        }
        this.valorNeto = params.valorNeto;
        this.iva = params.iva;
    }

    public calcularValorNeto(): number{
        const valorTotalFactura = this.valorNeto + (this.valorNeto * this.iva);
        return valorTotalFactura;
    }
}
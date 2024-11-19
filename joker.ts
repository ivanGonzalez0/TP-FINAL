import { Juego } from "./juego";

export class Joker extends Juego{
    private combinacion: string;
    private simbolo: string;
    private carrete: number;

    constructor(combinacion: string, nombre:string, min:number, max: number){
        super("Joker", 200, 1000)
        this.combinacion= combinacion;
    }
    
}
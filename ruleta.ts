import { Juego } from "./juego";


export class Ruleta extends Juego{
    private participantes: number;

    constructor( nombre:string,  min: number, max: number, participantes:number){
        super("Ruleta", 300, 7000);
        this.participantes = participantes;
    }
}
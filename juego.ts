import { Apuesta } from "./casino";

export abstract class Juego implements Apuesta {
    protected nombre: string;
    protected apuestaMin: number;
    protected apuestaMax: number;

    constructor(nombre: string, min: number, max: number) {
        this.nombre = nombre
        this.apuestaMin = min;
        this.apuestaMax = max;
    }


    public iniciar(): void {
        console.log("BIENVENIDO AL JUEGO");
    }
    public jugar(): void {

    }
    public finalizar(): void {
        console.log("el juego a finalizado");
    }
}

import { BlobOptions } from "buffer";
import { Apuesta } from "./casino";
import * as rls from 'readline-sync';


export abstract class Juego implements Apuesta {
    protected nombre: string;

    constructor(nombre: string, min: number, max: number) {
        this.nombre = nombre
    }
    abstract apuesta(): number;
    abstract apuestaMin(): number;
    abstract apuestaMax(): number;
    abstract mostrarCredito(credito: number): void;

    public iniciar(): void {
        while (true) {
            let bienvenido: string = rls.question(`presione 1 para iniciar el juego ${this.nombre}: `);
                if (bienvenido === "1") {
                    console.log(`¡Bienvenido al juego! `);
                    break;
                }
        }
    }
    public jugar(): void {
        console.log("el juego ya inicio");
    }

    public finalizar(): void {
        console.log("el juego finalizo");
    }
    public obtenerResultado():void{
        
    }
}
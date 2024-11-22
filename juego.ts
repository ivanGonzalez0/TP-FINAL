
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




    // jugar(): void {
    //     console.log(`Jugando a la tragamonedas ${this.nombre}...`);
    //     const resultado = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
    //     console.log(`Resultado: ${resultado}`);
    //     this.obtenerResultado();
    // }



// iniciar() {
//     this.jugando = true;
//     console.log(`¡Bienvenido al juego de ${this.nombre}!`);
// }

// jugar() {
//     if (!this.jugando) {
//         console.log("Debes iniciar el juego primero.");
//         return;
//     }
//     console.log("¡Estás jugando!");
// }

// finalizar() {
//     this.jugando = false;
//     console.log(`¡Gracias por jugar ${this.nombre}!`);
// }
// }
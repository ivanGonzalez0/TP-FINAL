import { Apuesta } from "./casino";
import * as rls from 'readline-sync';

export abstract class Juego implements Apuesta {
    protected nombre: string;
    protected archivoInstrucciones: string;

    public constructor(nombre: string) {
        this.nombre = nombre
    }
    abstract apuesta(): number;
    abstract apuestaMin(): number;
    abstract apuestaMax(): number;
    abstract mostrarCredito(): void;
    abstract leerInstrucciones(): void;
    
    public iniciar(): void {//Método que maneja la lógica de inicio del juego
        while (true) { //Utiliza un bucle infinito para seguir pidiendo al usuario que presione 1 hasta que lo haga.
            let bienvenido: string = rls.question(`Presione 1 para iniciar el juego ${this.nombre}: `);//Pide al usuario que ingrese un valor desde la consola.
            if (bienvenido === "1") { //Verifica si el usuario ha ingresado "1".
                console.log(`¡Bienvenido al juego! `);
                break; //Si es así, muestra un mensaje de bienvenida y rompe el bucle con break
            }
        }
    }
    public jugar(): void {
        console.log("el juego ya inicio");
    }
    public finalizar(): void {
        console.log("el juego finalizo");
    }
}
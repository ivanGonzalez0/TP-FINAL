import * as rls from 'readline-sync';
import { Juego } from "./juego";
import * as fs from 'fs';//

export class Joker extends Juego {
    protected simbolos: string[];
    protected carrete: string[];
    protected credito: number;
    protected apuestaActual: number;
    protected apuestaUser: number=0;

    public constructor() { 
        super("Joker");
        this.simbolos = ["🚀", "🤡", "🎃", "🎇", "👑", "💰"];
        this.carrete = [];
        this.credito = 100000;
        this.apuestaActual = 0;
    }

    public apuesta(): number {
        if (this.apuestaActual === 0) {
            while (true) {
                this.apuestaUser = rls.questionInt("Ingrese su apuesta entre " + this.apuestaMin() + " y " + this.apuestaMax() + ": ");

                if (this.apuestaUser >= this.apuestaMin() && this.apuestaUser <= this.apuestaMax()) {
                    this.apuestaActual = this.apuestaUser;
                    return this.apuestaUser;
                } else {
                    console.log("Ingrese una apuesta válida.");
                }
            }
        }else {
            return this.apuestaActual;
        }
    }

    public jugar(): void {
        let jugar: string = rls.question("presione 'A' para girar el carrete: ");
        if (jugar === "A") {
            console.log("los carretes estan girando");
        }
        this.girarCarrete(); 
     
        console.log(`Carrete: ${this.carrete.join(', ')}`);
        if (this.carrete[0] === this.carrete[1] && this.carrete[1] === this.carrete[2]) {
            console.log('¡Ganaste!');
            this.credito += this.apuestaUser;
        } else {
            console.log('¡Perdiste!');
            this.credito -= this.apuestaUser;
        }
        console.log(`Tu crédito actual es: ${this.credito}`);
        this.apuestaActual = 0; 
    }

    public girarCarrete(): void {
        this.carrete = [];
        for (let i = 0; i < 3; i++) {
            const indice = Math.floor(Math.random() * this.simbolos.length);
            this.carrete.push(this.simbolos[indice]);
        }
    }

    public leerInstrucciones(): void {
        try {
            const instrucciones = fs.readFileSync('joker.txt', 'utf8');
            console.log(instrucciones);//copia tpfinal/joker.ts
        } catch (error) {
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    public mostrarCredito(): void {
        console.log(`Tu credito es: ${this.credito}`);
    }

    public apuestaMin(): number {
        return 200;
    }
    public apuestaMax(): number {
        return 3000;
    }
}

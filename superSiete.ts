import { Juego } from "./juego";
import * as rls from 'readline-sync';
import * as fs from 'fs';

export class SuperSiete extends Juego {
    private simbolos: string[];
    private carrete: string[];
    private credito: number;
    private apuestaUser: number=0;

    public constructor() {
        super("superSiete");
        this.simbolos= ["💯", "🍒", "🍀", "🌟", "💰"]
        this.carrete = [];
        this.credito= 100000;
    }
    public apuesta(): number {
        while (true) {
            this.apuestaUser = rls.questionInt("Ingrese su apuesta entre " + this.apuestaMin() + " y " + this.apuestaMax()+ ": ");
            if (this.apuestaUser >= this.apuestaMin() && this.apuestaUser <= this.apuestaMax()) {
                return this.apuestaUser;
            } else {
                console.log("Ingrese una apuesta válida.");
            }
        }
    }

    public jugar(): void {
        let jugar: string = rls.question("presione 'A' para girar el carrete: ");
        if (jugar === "A") {
            console.log("los carretes estan girando");
        }
        this.girarCarrete();
        // JOIN: combina filas para obtener un resultado del array
        console.log(`Carrete: ${this.carrete.join(', ')}`);
        if (this.carrete[0] === this.carrete[1] && this.carrete[1] === this.carrete[2]) {
            console.log('¡Ganaste!');
            this.credito += this.apuestaUser;
        } else {
            console.log('¡Perdiste!');
            this.credito -= this.apuestaUser;
        }
        this.mostrarCredito();
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
            const instrucciones = fs.readFileSync('superSiete.txt', 'utf8');
            console.log(instrucciones);//copia tpfinal/joker.ts
        } catch (error) {
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    public mostrarCredito(): void {
            console.log(`tu credito es: ${this.credito}`);
    }

    public apuestaMin(): number {
        return 2000;
    }
    public apuestaMax(): number {
        return 30000;
    }
}
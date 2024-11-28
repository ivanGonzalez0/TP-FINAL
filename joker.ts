import * as rls from 'readline-sync';
import { Juego } from "./juego";

export class Joker extends Juego {
    private simbolos: string[];
    private carrete: string[];
    private credito: number;

    public constructor() {
        super("Joker", 200, 3000);
        this.simbolos= ["🚀", "🤡", "🎃", "🎇", "👑","💰"];
        this.carrete = [];
        this.credito= 100000;
    }
    
    public apuesta(): number {
        let apuestaUser: number;
        while (true) {
            apuestaUser = rls.questionInt("Ingrese su apuesta ( entre " + this.apuestaMin() + " y " + this.apuestaMax()+ "): ");
            if (apuestaUser >= this.apuestaMin() && apuestaUser <= this.apuestaMax()) {
                return apuestaUser;
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
            this.credito += this.apuesta();
        } else {
            console.log('¡Perdiste!');
            this.credito -= this.apuesta();
        }
        console.log(`Tu crédito actual es: ${this.credito}`);
    }

    public girarCarrete(): void {
        this.carrete = [];
        for (let i = 0; i < 3; i++) {
          const indice = Math.floor(Math.random() * this.simbolos.length);
        this.carrete.push(this.simbolos[indice]);
        }
    }

    public mostrarCredito(): void {
            console.log(`tu credito es: ${this.credito}`);
    }

    public apuestaMin(): number {
        return 200;
    }
    public apuestaMax(): number {
        return 3000;
    }
}
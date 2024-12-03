import { Joker } from './joker';
import * as fs from 'fs'; 


export class SuperJoker extends Joker { 
    private bonus: string[];

    public constructor() {
        super();
        this.bonus = ["💰", "💰", "💰"];
    }

    public jugar(): void {
        super.jugar();
        if (this.carrete[0] === this.carrete[1] && this.carrete[1] === this.carrete[2]) {
            this.ganarBonus();
        }
    }
    public leerInstrucciones(): void {
        try {
            const instrucciones = fs.readFileSync('superJoker.txt', 'utf8'); 
            console.log(instrucciones);
        } catch (error) { 
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    public ganarBonus(): void {
        console.log("¡FELICIDADES GANASTE EL BONUS!");
        const multiplicador = this.bonus.length; 
        this.credito *= multiplicador; 
        console.log(`Tu crédito se ha multiplicado por ${multiplicador} y ahora es: ${this.credito}`);
    }
    
    public apuestaMin(): number {
        return 5000;
    }
    public apuestaMax(): number {
        return 50000;
    }
}

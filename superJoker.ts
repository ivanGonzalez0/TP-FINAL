import { Joker } from './joker'; //importa la clase joker
import * as fs from 'fs'; //Importa el módulo del sistema de archivos (fs) para permitir la lectura de archivos.


export class SuperJoker extends Joker { //Define la clase SuperJoker que hereda de Joker.
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
            const instrucciones = fs.readFileSync('superJoker.txt', 'utf8'); //lee archivo sincrónicamente.
            console.log(instrucciones);//Si el archivo se lee correctamente, su contenido se muestra en la consola
        } catch (error) { //Si ocurre un error, se muestra un mensaje de error
            console.log('Error al leer el archivo de instrucciones');
        }
    }

    public ganarBonus(): void { //Método que otorga un premio adicional.
        console.log("¡FELICIDADES GANASTE EL BONUS!");
        const multiplicador = this.bonus.length; // Utiliza la cantidad de elementos en el bonus como multiplicador
        this.credito *= multiplicador; // Multiplica el crédito por el multiplicador
        console.log(`Tu crédito se ha multiplicado por ${multiplicador} y ahora es: ${this.credito}`);//Muestra el nuevo crédito del usuario en la consola.
    }
    
    public apuestaMin(): number {
        return 5000;
    }
    public apuestaMax(): number {
        return 50000;
    }
}
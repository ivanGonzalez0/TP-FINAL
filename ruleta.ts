import * as rls from 'readline-sync';
import { Juego } from "./juego";
import * as fs from 'fs';


export class Ruleta extends Juego {
    private numeroGanador: number = -1;
    private colorGanador: string = '';
    private credito: number = 100000;
    private apuestaUser: number = 0;

    public constructor() {
        super("Ruleta Americana");

    }

    // Método para realizar una apuesta
    public apuesta(): number {
        while (true) {
            this.apuestaUser = rls.questionInt("Ingrese su apuesta entre " + this.apuestaMin() + " y " + this.apuestaMax() + ": ");
            if (this.apuestaUser >= this.apuestaMin() && this.apuestaUser <= this.apuestaMax()) {
                return this.apuestaUser;
            } else {
                console.log("Ingrese una apuesta válida.");
            }
        }
    }

    // metodo para jugar
    public jugar(): void {
        let fichaNumero: number = rls.questionInt("Seleccione un numero entre 0 y 36: ");
        let jugar: string = rls.question("Presione 'A' para girar la Ruleta: ");
        if (jugar.toUpperCase() === "A") {
            console.log("La Ruleta está girando");
        } else {
            console.log("Opción inválida. Por favor, presione 'A' para girar la Ruleta.");
        }

        // genera un numero aleatorio entre el 0 y el 36
        if (fichaNumero >= 0 && fichaNumero <= 36) {
            this.numeroGanador = Math.floor(Math.random() * 37);//Genera un número aleatorio entre 0 y 36.
            this.colorGanador = this.mostrarColor(this.numeroGanador);//color del número ganador.
            console.log(`El número ganador es: ${this.numeroGanador}(${this.colorGanador})`);//Muestra el número y color ganador

            // muestra si perdiste o ganaste 
            if (fichaNumero === this.numeroGanador) {  //Si el número seleccionado coincide con el número ganador,gana e incrementa su crédito
                console.log("¡Ganaste!");
                this.credito += this.apuestaUser;
            } else {
                console.log("Perdiste");//Si no pierde y se decrementa su crédito
                this.credito -= this.apuestaUser;
            }
            this.mostrarCredito();//Muestra el crédito actual del usuario.
        } else { 
            console.log("Número inválido. Debe estar entre 0 y 36.");
        }
    }
    // Método que devuelve el color del número
    private mostrarColor(numero: number): string {
        if (numero === 0) { //Si el número es 0, devuelve 'verde
            return 'verde';
        } else if (numero % 2 === 0) {
            return 'rojo'; //Si el número es par, devuelve 'rojo'.
        } else {
            return 'negro'; //Si el número es impar, devuelve 'negro'.
        }
    }
    public leerInstrucciones(): void {
        try {
            const instrucciones = fs.readFileSync('ruleta.txt', 'utf8');//lee archivo superSiete inmediatamente x eso es sincronica
            console.log(instrucciones);
        } catch (error) { //try-catch si hay un error al leer el archivo se muestra mensaje de error y evita q el programa se detenga
            console.log('Error al leer el archivo de instrucciones');
        }
    }
    public mostrarCredito(): void {
        console.log(`Tu crédito actual es: $${this.credito}`);
    }
    public apuestaMin(): number {
        return 1000;
    }
    public apuestaMax(): number {
        return 50000;
    }
}
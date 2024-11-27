
import * as rls from 'readline-sync';
import { Juego } from "./juego";


export class Ruleta extends Juego {
    private numeros: number[];
    private colores: string[];
    private participantes: number=8;
    private numeroGanador: number[];
    private colorGanador: string[]; 
    private credito: number;
    private fichas: number[];



     public constructor() {
        super("Ruleta", 1000, 50000);
        this.numeros = [];
        this.colores = ['rojo', 'negro', 'verde'];
        this.participantes = 8;
        this.numeroGanador= [];
        this.colorGanador=[] ;
        this.credito= 100000;
        this. fichas=[] ;

    }


    // Método para realizar una apuesta
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
        let jugar: string = rls.question("Presione 'A' para girar la Ruleta: ");

        if (jugar === "A") {
          console.log("La Ruleta esta girando");
          this.girarRuleta();
        } else {
          console.log("Opción inválida. Por favor, presione 'A' para girar la Ruleta.");
        }
      }
      private girarRuleta(): any {
        let fichaNumero: number= rls.questionInt("Seleccione un numero entre el 0 y 36 :  ");
        if(fichaNumero >= 0 && fichaNumero <= 36){
            return fichaNumero;
        }
    }
    public resultado():void{
        let resultado:number=0;
         let numeroElegido:number = Math.floor(Math.random() * 37);
        console.log(`El resultado es: ${numeroElegido}`);
        if (resultado === numeroElegido) {
          console.log("¡Ganaste!");
        // } else if (resultado >= 1 && resultado <= 18) {
        //   console.log("¡Ganaste! El resultado es un número rojo.");
        // } else if (resultado >= 19 && resultado <= 36) {
        //   console.log("¡Ganaste! El resultado es un número negro.");
        // }
    } else {
        console.log("Lo siento, has perdido la partida. El número ganador fue:", numeroElegido);
    }

}
    
    mostrarCredito() {
        console.log(`Tu crédito actual es: $${this.credito}`);
        console.log(`El número ganador es: ${this.numeroGanador} (${this.colorGanador})`);

        console.log(`Tu nuevo crédito es: $${this.credito}`);
    }

  
   
    public apuestaMin(): number {
        return 1000;
    }
    public apuestaMax(): number {
        return 50000;
    }
}


 // Método para girar la ruleta y obtener resultados
    // girarRuleta() {
    //     let numeroGanador=[]
    //     this.numeroGanador = Math.floor(Math.random() * 37); 
    //     this.colorGanador = this.numeros[this.numeroGanador] % 2 === 0 ? 'rojo' : 'negro';
    // }

      // private calcularGanancias(): number {
    //     let ganancias = 0;
    //     if (this.tipoApuesta === 'numero' && this.apuestaActual === this.numeroGanador) {
    //         ganancias = this.apuestaActual * 35; // Ajusta el multiplicador según las reglas
    //     } else if (this.tipoApuesta === 'color' && this.colores[this.apuestaActual % 3] === this.colorGanador) {
    //         ganancias = this.apuestaActual;
    //     } else if (this.tipoApuesta === 'par' && this.numeroGanador % 2 === 0) {
    //         ganancias = this.apuestaActual;
    //     } else if (this.tipoApuesta === 'impar' && this.numeroGanador % 2 === 1) {
    //         ganancias = this.apuestaActual;
    //     }
    //     return ganancias;
// }
import * as rls from 'readline-sync';
import { Juego } from "./juego";

export class Joker extends Juego {
    private combinacion: string;
    private carrete: string[];

    public constructor(combinacion: string) {
        super("Joker", 200, 3000);
        this.combinacion = combinacion;
        this.carrete = ["🚀", "🤡", "🎃", "💎"];
    }

    public jugar(): void {
        let jugar: string = rls.question("presione 'A' para girar el carrete: ");
        if (jugar === "A") {
            console.log("los carretes estan girando");
        }
        const resultado = this.carrete[Math.floor(Math.random() * this.carrete.length)];
        console.log(`Resultado: ${resultado}`);
        this.obtenerResultado();
        
    }


    public apuesta(): number {
            let apuestaUser: number=rls.questionInt("ingrese su apuesta: ")
            if(apuestaUser >200 && apuestaUser <3000){
                return apuestaUser;
        } else {
            console.log("ingrese nuevamente su apuesta.");
        }
        return apuestaUser;
}

}



















//     public jugar(): void {
//         let jugar: string = rls.question("presione 'A' para girar el carrete: ");
//         if (jugar === "A") {

//             console.log("los carretes estan girando", this.carrete);
//         }
        
//     }
// }
//   private jugar(): void {
//     console.log(¡Los rodillos están girando!);
//     const resultado = this.girarRodillos();
//     const coincidencias = this.calcularCoincidencias(resultado);
//     console.log(Resultado: ${ resultado.join( | ) });
//     this.mostrarPremio(coincidencias);
// }



import { Joker } from './joker';
import * as rls from 'readline-sync';


export class    SuperJoker extends Joker{
    private bonus:string [];
    private tiradasGratis:number=8;
   

    public contructor(nombre:string,min:number,max:number,){
        
        this.bonus= ["💰"]
        this.tiradasGratis =8;
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
        // if (this.carrete[0] === this.carrete[1] && this.carrete[1] === this.carrete[2]) {
        //     console.log('¡Ganaste!');
        //     // this.credito += this.apuesta();
        // } 
        // else {
        //     console.log('¡Perdiste!');
        //     // this.credito -= this.apuesta();
        // }   
        console.log(`Tu crédito actual es: ${this.credito}`);
    }
    public ganarBonus():void{
        let bonus:string;
        if (this.bonus[0] === this.bonus[1] && this.bonus[1] === this.bonus[2]) {
            console.log("FELICIDADES!!! GANO EL BONUS  💰💰💰");
            this.credito += this.apuesta();
        } 
        else {
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
        return 500;
    }
    public apuestaMax(): number {
        return 5000;
    }
}
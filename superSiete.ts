import { Joker } from "./joker";
import { Juego } from "./juego";

export class SuperSiete extends Juego {
    private bonus: number;

    public constructor(nombre:string, min: number, max: number, bonus: number){
        super("combinacion", 100, 3000)
        this.bonus= bonus;
    }
}
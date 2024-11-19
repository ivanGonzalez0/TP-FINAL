import { Juego } from "./juego";

export class SuperSiete extends Juego{
    private bonus: number;

    constructor(nombre:string, min: number, max: number, bonus: number){
        super("Super7", 100, 3000)
        this.bonus= bonus;
    }
}
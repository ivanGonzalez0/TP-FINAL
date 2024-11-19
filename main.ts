import * as rls from 'readline-sync';

import { Joker } from "./joker";
import { Ruleta } from "./ruleta";
import { SuperSiete } from "./superSiete";

let juego1 = new Joker("combinacion gemas", "Joker 's Jewels", 200, 1000);
let juego2 = new Ruleta("Ruleta Americana", 300, 7000, 5);
let juego3 = new SuperSiete("Super Siete", 100, 3000, 5000);

console.error("-------------------------------")
console.error("         *       *       ")
console.error("  *                 *     ")
console.error(" * BIENVENIDOS AL CASINO * ");
console.error(" *                    *     ")
console.error("        *       *           ")
console.error("-------------------------------")

let bienvenido: number = rls.questionInt("ingrese el numero 1 para abrir el menu de acceso: ");
while (true) {
    if (bienvenido < 2) {
        if (bienvenido === 1) {
            console.error("-----------------------------");

            console.log("1_ Joker 's Jewels");
            console.log("2_ Ruleta Americana");
            console.log("3_ Super Siete");

            console.error("-----------------------------");
        }
    } else {
        console.error("ingrese nuevamente 1.");
    }
    // MENU PRINCIPAL 
    let menu: number = rls.questionInt("ingrese un numero del menu para empezar a jugar: ");
    switch (menu) {
        case 1:
            juego1.iniciar();
            console.log(juego1);
            break;
        case 2:
            juego1.iniciar();
            console.log(juego2);
            break;
        case 3:
            juego1.iniciar();
            console.log(juego3);
            break;
    }
    // VUELVE AL MENU PRINCIPAL / SALE DEL JUEGO
    let menu2: number = rls.questionInt("ingrese 1 para volver al menu principal o 2 para salir del juego: ");
    if (menu2 === 1) {
        console.log(menu);
    } else {
        console.error("-----------------------------");
        console.error("A SALIDO DEL JUEGO.");
        console.error("-----------------------------");
        break;
    }
}


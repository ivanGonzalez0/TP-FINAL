import * as rls from 'readline-sync';

import { Joker } from "./joker";
import { Ruleta } from "./ruleta";
import { SuperSiete } from "./superSiete";
import { SuperJoker } from './superjoker';
import { Casino } from './casino';

let juego1 = new Joker();
let juego2 = new Ruleta();
let juego3 = new SuperSiete();
let juego4 = new SuperJoker();
let casino = new Casino('usuario', 1234);

console.error("-------------------------------");
console.error("         *       *       ");
console.error("  *                 *     ");
console.error(" * BIENVENIDOS AL CASINO * ");
console.error(" *                    *     ");
console.error("        *       *           ");
console.error("-------------------------------");

casino.login();

let bienvenido: number = rls.questionInt("ingrese el numero 1 para abrir el menu de acceso: ");
while (true) {
    if (bienvenido < 2) {
        if (bienvenido === 1) {
            console.error("-----------------------------");

            console.log("1_ Joker 's Jewels");
            console.log("2_ Ruleta Americana");
            console.log("3_ Super Siete");
            console.log("4_ Super Joker");

            console.error("-----------------------------");
        }
    } else {
        console.error("ingrese nuevamente 1.");
    }
    // MENU PRINCIPAL 
    let menu: number = rls.questionInt("ingrese un numero del menu para empezar a jugar: ");
    switch (menu) {
        case 1:
            juego1.leerInstrucciones();
            console.error("------------------");
            juego1.iniciar();
            console.error("------------------");
            juego1.apuesta();
            console.error("------------------");
            juego1.jugar();
            console.error("------------------");
            juego1.finalizar();
            break;
        case 2:
            juego2.leerInstrucciones();
            console.error("------------------");
            juego2.iniciar();
            console.error("------------------");
            juego2.apuesta();
            console.error("------------------");
            juego2.jugar();
            console.error("------------------");
            juego2.finalizar();
            break;
        case 3:
            juego3.leerInstrucciones();
            console.error("------------------");
            juego3.iniciar();
            console.error("------------------");
            juego3.apuesta();
            console.error("------------------");
            juego3.jugar();
            console.error("------------------");
            juego3.finalizar();
            break;
        case 4:
            juego4.leerInstrucciones();
            console.error("------------------");
            juego4.iniciar();
            console.error("------------------");
            juego4.apuesta();
            console.error("------------------");
            juego4.jugar();
            console.error("------------------");
            juego4.finalizar();
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

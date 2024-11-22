/*Tiene un juego tragamonedas que tiene distintas
variantes cada una de ellas cumple una
funcionalidad similar, que depende de la temática y
del valor mínimo de apuesta.
Deberán hacer 2 variantes (herencia).
Además debe tener un mínimo de 2 juegos
elegidos por ustedes, cada uno con los valores
de apuesta y forma de jugar.
CFS
Requerimientos
El programa deberá proveer funcionalidades para
elegir un juego y realizar una apuesta obteniendo
el resultado de la misma (gano X plata o perdió).
Incorporar en el trabajo práctico una clase
abstracta y una interfaz.
CFS
Requerimientos
Generar el UML (diagrama de clases)
correspondiente al programa que van a desarrollar.
Pueden agregar todo lo que consideren necesario
para el correcto funcionamiento del programa,
siempre que se cumplan los requerimientos
mínimos exigidos. Priorizar funcionalidad a
extensión de trabajo.
Se debe realizar en un Proyecto NPM Nuevo
CFS
Requerimientos
Grupos de 5 integrantes como máximo
Incorporar excel con pruebas funcionales
Fecha limite de entrega:
6 de Diciembre 2024
Modo de entrega: el trabajo debe ser subido a un
repositorio nuevo en github (un repositorio por
Equipo pero todos deben trabajar).*/
import * as rls from 'readline-sync';

import { Joker } from "./joker";
import { Ruleta } from "./ruleta";
import { SuperSiete } from "./superSiete";

let juego1 = new Joker("");
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
            juego1.apuesta();
            juego1.jugar();
            break;
        case 2:
            juego2.iniciar();
            console.log(juego2);
            break;
        case 3:
            juego3.iniciar();
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

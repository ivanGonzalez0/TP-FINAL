import { Juego } from "./juego";
import * as rls from 'readline-sync';
import * as fs from 'fs';

export class SuperSiete extends Juego {
    private simbolos: string[];
    private carrete: string[];
    private credito: number;
    private apuestaUser: number=0;

    public constructor() {
        super("superSiete");
        this.simbolos= ["💯", "🍒", "🍀", "🌟", "💰"]
        this.carrete = [];
        this.credito= 100000;
    }
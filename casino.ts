import * as rls from 'readline-sync';

export interface Apuesta { //Define una interfaz Apuesta con tres métodos
    iniciar(): void;
    jugar(): void;
    finalizar(): void;
}

export class Casino {
    private usuario: string;
    private constraseña: number;

    public constructor(usuario: string, contraseña: number) {
        this.usuario = usuario;
        this.constraseña = contraseña;
    }

    public login(): void {
        this.usuario = 'lucas';
        this.constraseña = 1234;

        let usuarioIngresado: string;
        let claveIngresada: number;

        while (true) {
            usuarioIngresado = rls.question("Ingrese el nombre de usuario: ");
            claveIngresada = rls.questionInt("Ingrese la contraseña: ");

            if (usuarioIngresado === this.usuario && claveIngresada === this.constraseña) {
                console.log("Bienvenido");
                break;
            } else {
                console.log("El usuario o la contraseña es incorrecto. Por favor, intente nuevamente.");
            }
        }
    }
}
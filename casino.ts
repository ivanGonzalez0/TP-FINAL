export interface Apuesta{
    iniciar():void;
    jugar():void;
    finalizar():void;
}

export class Casino {
    private usuario: string;
    private constraseña: string;

    public constructor(usuario: string, contraseña: string) {
        this.usuario = usuario;
        this.constraseña = contraseña;
    }

    // getters
    public getUser(): string {
        return this.usuario;
    }
    public getContraseña(): string {
        return this.constraseña;
    }
    // setters
    public setUser(): void {
        this.usuario = this.usuario;
    }
    public setContraseña(): void {
        this.constraseña = this.constraseña;
    }
}
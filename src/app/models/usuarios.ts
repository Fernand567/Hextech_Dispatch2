export class usuarios{
    _id?: number;
    nombre:string;
    cedula:string;
    cargo:string;
    correo:string;
    contrasenia: string;

    constructor(nombre:string,cedula:string,cargo:string,correo:string,contrasenia:string){
        this.nombre=nombre;
        this.cedula=cedula;
        this.cargo=cargo;
        this.correo=correo;
        this.contrasenia=contrasenia;
    }
}
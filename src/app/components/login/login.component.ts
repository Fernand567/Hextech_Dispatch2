import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Creamos un objeto FormGroup para controlar el formulario
  form!: FormGroup; // Agrega el signo de admiración (!) para indicar que la propiedad será inicializada más adelante

  constructor() {
    // Inicializamos el FormGroup y agregamos los campos correspondientes
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@est\.ups\.edu\.ec$')]),
      password: new FormControl('', Validators.required),
    });
  }

  // Getter para acceder al campo de correo y verificar si es inválido
  get emailInvalid(): boolean {
    const emailControl: AbstractControl<any, any> | null = this.form.get('email');
    return emailControl?.invalid && (emailControl?.dirty || emailControl?.touched) || false;
  }

  onLogin() {
    if (this.form.valid) {
      // Aquí puedes implementar la lógica para autenticar al usuario con el servicio de autenticación
      // this.form.value contiene los datos ingresados en el formulario (email y password)
      console.log('Datos ingresados:', this.form.value);
    } else {
      // Formulario inválido, muestra un mensaje de error o realiza alguna acción adecuada
    }
  }
}


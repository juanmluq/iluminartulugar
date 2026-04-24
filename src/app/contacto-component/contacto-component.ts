import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactoComponent {
//   onSubmit() {
//     // Add your form submission logic here
//     alert('El sistema ha registrado su calificación y se ingresara si su número de cliente es valido.');
//   }
// }
  private fb = inject(FormBuilder);
  private router = inject(Router);

  miFormulario = this.fb.group({
    nombre:  [ '', Validators.required ],
    ciudad: ['', Validators.required],
    client: ['', Validators.required],
    // rating: ['', Validators.required],
    message: ['', Validators.required]
  });

  enviar() {

    if (this.miFormulario.valid) {
      alert('El sistema ha registrado su calificación y se ingresara si su número de cliente es valido.');
      this.miFormulario.reset();
            window.location.reload();   
    } else{
          alert('Error. Complete todos los campos!');

    }

  }
}
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contacto-component',
  imports: [],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactoComponent {
  onSubmit() {
    // Add your form submission logic here
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  }
}

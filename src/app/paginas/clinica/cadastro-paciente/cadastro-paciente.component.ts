import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent {

  cadastro: FormGroup

  constructor (
    private readonly formBuilder: FormBuilder,
  ) {
    this.cadastro = this.formBuilder.group({
      nome: ['', [Validators.required,]],
      sobrenome: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required,]],
      cpf: ['', [Validators.required,]],
    })
  }
}

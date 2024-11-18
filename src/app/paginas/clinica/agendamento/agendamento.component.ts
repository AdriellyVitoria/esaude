import { Component, model } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.scss'
})
export class AgendamentoComponent {
  selected = model<Date>(new Date());

  agendamento: FormGroup

  constructor (
    private readonly formBuilder: FormBuilder,
  ) {
    this.agendamento = this.formBuilder.group({
      cpf: ['', [Validators.required,]],
    })
  }
}

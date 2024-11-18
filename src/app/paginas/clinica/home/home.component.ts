import { Component, model } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PacienteService } from '../../../core/services/paciente.service';
import { Router } from '@angular/router';
import { Agendamento } from '../../../core/modelos/agendamento';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  agendamentos: Agendamento[] = [
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    },
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    },
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    }
  ]
  notificacoes: Agendamento[] = [
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    },
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    },
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    },
    {
      nomePaciente: 'Amanda Larissa Santos',
      nomeMedico: 'Medico tal',
      horario: '15:30',
      data: '07/08'
    }
  ]
  selected = model<Date>(new Date());

  constructor(
    private pacienteService: PacienteService,
    private readonly router: Router,
    private dialog: Dialog
  ) { }

  recusarNotificacao(idNotificacao: number | undefined) {
    throw new Error('Method not implemented.');
  }

  confirmarNotificacao(idNotificacao: number | undefined) {
    throw new Error('Method not implemented.');
  }
}
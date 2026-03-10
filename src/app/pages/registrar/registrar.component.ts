import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import IUsuario from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { matchPasswordValidator } from '../../utils/match-password-validator';
import { AlertService } from '../../services/alert/alert.service';
import { TypeMessageAlert } from '../../enuns/type-message-alert';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss',
})
export class RegistrarComponent {
  form = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required),
    },
    {
      validators: matchPasswordValidator('password', 'confirmPassword'),
    },
  );

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alertService: AlertService,
  ) {}

  register() {
    this.usuarioService.register(this.form.value as IUsuario).subscribe(() => {
      this.router.navigate(['/login']);
      this.alertService.alert(
        TypeMessageAlert.Success,
        'Usuário registrado com sucesso!',
      );
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private usuarioService: UsuarioService){}

  entrar(){
    if(this.form.valid){
      this.usuarioService.login(this.form.value.email as string, this.form.value.senha as string).subscribe(data =>{
        console.log(data);

        localStorage.setItem('token', `Bearer ${data.token}`)
        localStorage.setItem('usuario', JSON.stringify(data.user))
        this.router.navigate(['/quadro'])

      })
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../../interfaces/usuario.interface';
import { environment } from '../../../environments/environment';
import IUsuario from '../../interfaces/usuario.interface';
import ILogin from '../../interfaces/login.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  register(user: IUsuario) {
    return this.http.post(`${environment.apiUrl}/auth/register`, user);
  }

  login(email: string, senha: string): Observable<ILogin> {
    return this.http.post<ILogin>(`${environment.apiUrl}/auth/login`, {
      email,
      senha,
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getUsuario(): IUsuario | null {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }
}

import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UsuarioService } from '../services/usuario/usuario.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  const loginService = inject(UsuarioService);
  if (!req.url.includes('login') || !req.url.includes('register')) {
    if (token) {
      const headers = new HttpHeaders().append('Authorization', token);
      const cloneReq = req.clone({
        headers,
      });
      return next(cloneReq).pipe(
        catchError((error, caugt) => {
          console.log(caugt);

          if (error.status !== 401) {
            return throwError(() => error);
          }
          loginService.logout();
          return throwError(() => error);
        }),
      );
    }
  }

  return next(req);
};

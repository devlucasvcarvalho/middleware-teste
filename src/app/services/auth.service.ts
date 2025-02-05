import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.autoSignIn();
  }

  autoSignIn() {
    if (localStorage.getItem('access_key') === environment.access_key) {

      this.isAuth.next(true);
      this.router.navigate(['/']);
    }
  }

  signIn(access_key: string) {

    if (environment.access_key === access_key) {
      localStorage.setItem('access_key', access_key);
      this.isAuth.next(true);
      this.router.navigate(['/']);
    } else {
      alert('Chave de Acesso Inválida')
    }
  }

  signOut() {
    localStorage.removeItem('access_key');
    this.isAuth.next(false);
    this.router.navigate(['/auth']);
  }
}

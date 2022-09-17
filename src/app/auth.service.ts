import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const loggedIn = (name == 'pikachu' && password == 'pikachu')

    return of(loggedIn).pipe(delay(1000), tap(loggedIn => this.isLoggedIn = loggedIn));
  }

  logout() {
    this.isLoggedIn = false;
  }
}

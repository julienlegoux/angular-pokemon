import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté pikachu/pikachu';
  authService: AuthService;
  name: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService = this.auth
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Echec de connexion';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...'
    this.auth.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if(this.auth.isLoggedIn){
        this.router.navigate(['/pokemons']);
      } else {
        this.router.navigate(['/login']);
        this.password = '';

      }
    })
  }

  logout() {
    this.authService.logout()
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Bienvenue à {{pokemonList[0]}}!</h1>`
})
export class AppComponent implements OnInit{
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonName: string) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`)
  }
}

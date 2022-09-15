import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable()

export class PokemonService {

    constructor(private http: HttpClient) {
    }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response: Pokemon[]) => this.log(response)),
        catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response: Pokemon|undefined) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Pokemon[]|Pokemon|undefined) {
        console.table(response)
  }

  private  handleError(error: Error, errorValue: any){
        console.error(error);
        return of(errorValue);
  }
  getPokemonTypeList(): string[] {
    return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
      ];
  }
}

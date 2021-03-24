import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokeAPI, PokemonDetails } from 'src/interfaces';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeAPI: any;
  pokeSpeciesAPI: any;

  constructor(private http: HttpClient) {
    this.pokeAPI = environment.pokemonURL;
    this.pokeSpeciesAPI = environment.pokemonSpeciesURL;
  }

  // retorno los 151 pokemones

  getPokemon(): Observable<PokeAPI> {
    return this.http
      .get<PokeAPI>(`${this.pokeAPI}?limit=151`)
      .pipe(catchError(this._handleError)); // manejo el error en la respuesta
  }

  getPokemonDetails(name): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
  }

  getPokemonSpecies(name): Observable<any> {
    return this.http
    .get<any>(`${this.pokeSpeciesAPI}/${name}`)
    .pipe(catchError(this._handleError));
  }

  private_handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
        console.error (
          `Codigo retornado por backend ${error.status}, ` + `body was: ${error.error}`
        );
      }
    return throwError('Something bad happened: please try again later');
  }

}

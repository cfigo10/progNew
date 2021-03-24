import { Component } from '@angular/core';
import { Results } from '../interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// componente encargado de reflejar nuevos cambios
export class AppComponent {
  title = 'pokemon-app';
  public search: string;
  public typeFilter: string;
  public pokemons: Array<Results>;
  public abilityFilter: Array<string>;

  newPokemonSearch(search: string) {
    if (this.search !== search) {
      this.search = search;
    }
  }

  newTypeSelected(filter: string): void {
    if (this.typeFilter !== filter) {
      this.typeFilter = filter;
    }
  }

  newAbilitiesSelected(abilities: Array<string>): void {
    if (this.abilityFilter !== abilities) {
      this.abilityFilter = abilities;
    }
  }

  exportPokemons(pokemons: Array<Results>): void {
    if (this.pokemons !== pokemons) {
      this.pokemons = pokemons;
    }
  }
}

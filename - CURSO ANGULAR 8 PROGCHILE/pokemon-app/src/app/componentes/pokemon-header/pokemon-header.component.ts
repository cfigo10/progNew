import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Results } from '../../../interfaces';
import { type } from 'os';


@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();

  abilities: Array<string>;
  types: Array<string>;
  pokemonList: Array<Results>;
  search: string;
  currentType: string;
  currentAbilities: Array<string>;

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;

      this.pokemonList.forEach(pokemon => {
        this.setPokemonAbilities(pokemon);
        this.setPokemonTypes(pokemon);
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.abilities = [];
    this.types = [];
  }

  searchEvent(search): void {
    // verifica si la busqueda está limpia
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit('');
    }
  }

  onAbilitySelected(): void {
    if (this.currentAbilities && this.currentAbilities.length) {
      this.abilitiesSelected.emit(this.currentAbilities);
    } else {
      this.abilitiesSelected.emit('');
    }
  }

  setPokemonAbilities(pokemon: Results): void {
    if (pokemon) {
      pokemon.details.abilities.forEach(ability => {
        const abilityName = ability.ability.name;
        if (!this.abilities.includes(abilityName)) {
          this.abilities.push(abilityName);
          this.abilities.sort();
        }
      });
    }
  }

  setPokemonTypes(pokemon: Results): void {
    if (pokemon) {
      pokemon.details.types.forEach( types => {
        const typeName = types.types.name;
        if (!this.types.includes(typeName)) {
          this.types.push(typeName);
          this.types.sort();
        }
      });
    }
  }
}

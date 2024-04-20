import { Component } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = pokemonService.getAll();
  }
}

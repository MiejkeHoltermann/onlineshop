import { Component } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.pokemons = this.pokemonService.getAllBySearchTerm(
          params['searchTerm']
        );
      else this.pokemons = pokemonService.getAll();
    });
  }
}

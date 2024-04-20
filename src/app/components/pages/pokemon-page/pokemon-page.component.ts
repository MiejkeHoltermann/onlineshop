import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon } from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent {
  pokemon!: Pokemon;

  constructor(activatedRoute: ActivatedRoute, pokemonService: PokemonService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.pokemon = pokemonService.getPokemonById(params['id']);
      }
    });
  }
}

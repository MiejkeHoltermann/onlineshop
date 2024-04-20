import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../../shared/models/pokemon';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm = '';
  foundPokemons: Pokemon[] = [];
  noResults = false;

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
      this.searchPokemons();
    });
  }

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }

  searchPokemons(): void {
    this.foundPokemons = this.pokemonService.getAllBySearchTerm(
      this.searchTerm
    );
    this.noResults = this.foundPokemons.length === 0;
  }
}

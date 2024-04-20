import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { sample_Pokemon } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getAll(): Pokemon[] {
    return sample_Pokemon;
  }

  getAllBySearchTerm(searchTerm: string): Pokemon[] {
    return this.getAll().filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getPokemonById(pokemonId: string): Pokemon {
    return (
      this.getAll().find((pokemon) => pokemon.id == pokemonId) ?? new Pokemon()
    );
  }
}

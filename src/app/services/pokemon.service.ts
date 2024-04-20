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
}

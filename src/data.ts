import { Pokemon } from './app/shared/models/pokemon';
import { Tag } from './app/shared/models/tag';

export const sample_Pokemon: Pokemon[] = [
  {
    id: '1',
    name: 'Pikachu',
    price: 100,
    imageUrl: 'assets/pikachu.jpg',
    number: 25,
    type: 'Electric',
    species: 'Mouse Pokémon',
    height: 0.4,
    weight: 6.0,
    abilities: ['Static'],
    favorite: true,
    stars: 4.0,
    tags: ['electro', 'pokemon', 'pikachu', 'mouse'],
  },
  {
    id: '2',
    name: 'Eevee',
    price: 200,
    imageUrl: 'assets/eevee.jpg',
    number: 133,
    type: 'Normal',
    species: 'Evolution Pokémon',
    height: 0.3,
    weight: 6.5,
    abilities: ['Run Away', 'Adaptability'],
    favorite: false,
    stars: 4.6,
    tags: ['normal', 'pokemon', 'eevee', 'evolution'],
  },
];

export const sample_tags: Tag[] = [
  { name: 'pikachu', count: 1 },
  { name: 'pokemon', count: 2 },
  { name: 'eevee', count: 1 },
  { name: 'electro', count: 1 },
  { name: 'normal', count: 1 },
  { name: 'evolution', count: 1 },
  { name: 'mouse', count: 1 },
];

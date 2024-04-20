import { Pokemon } from './app/shared/models/pokemon';

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
    tags: ['elektro', 'pokemon', 'pikachu', 'mouse'],
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
    tags: ['normal', 'pokemon', 'eevee'],
  },
];

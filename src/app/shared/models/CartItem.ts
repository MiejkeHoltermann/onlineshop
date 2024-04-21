import { Pokemon } from './pokemon';

export class CartItem {
  constructor(public pokemon: Pokemon) {}
  quantity: number = 1;
  price: number = this.pokemon.price;
}

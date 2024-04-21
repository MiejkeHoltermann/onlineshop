import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon } from '../../../shared/models/pokemon';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent {
  pokemon!: Pokemon;

  constructor(
    activatedRoute: ActivatedRoute,
    pokemonService: PokemonService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.pokemon = pokemonService.getPokemonById(params['id']);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.pokemon);
    this.router.navigateByUrl('/cart-page');
  }
}

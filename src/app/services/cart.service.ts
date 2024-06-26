import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../shared/models/pokemon';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(pokemon: Pokemon): void {
    let cartItem = this.cart.items.find(
      (item) => item.pokemon.id === pokemon.id
    );
    if (cartItem) return;
    this.cart.items.push(new CartItem(pokemon));
    this.setCartToLocalStorage();
  }

  removeFromCart(pokemonId: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.pokemon.id != pokemonId
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(pokemonId: string, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.pokemon.id === pokemonId
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.pokemon.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart); //informs all listeners that the cart item was changed
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}

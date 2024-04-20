import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags?: Tag[] = [];

  constructor(pokemonService: PokemonService) {
    this.tags = pokemonService.getAllTags();
  }
}

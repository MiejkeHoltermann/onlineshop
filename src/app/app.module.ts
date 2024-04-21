import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { SearchComponent } from './components/partials/search/search.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonPageComponent } from './components/pages/pokemon-page/pokemon-page.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarRatingComponent,
    SearchComponent,
    PokemonPageComponent,
    TagsComponent,
    CartPageComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}

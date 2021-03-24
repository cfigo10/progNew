// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
// import { PokemonHomepageComponent } from './pokemon-homepage/pokemon-homepage.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '../modules/material-module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PokemonHeaderComponent,
//     PokemonHomepageComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MaterialModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/modules/material-module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonHeaderComponent } from './componentes/pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from './componentes/pokemon-homepage/pokemon-homepage.component';
import { AbilitiesFilterPipe } from 'src/pipes/abilitiesFilter.pipe';
import { SearchPipe } from 'src/pipes/search.pipe';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonHomepageComponent,
    AbilitiesFilterPipe,
    SearchPipe,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }




// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
// import { PokemonHomepageComponent } from 'src/components/pokemon-homepage/pokemon-homepage.component';
// import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
// import { MaterialModule } from './../modules/material-module';
// import { AbilitiesFilterPipe } from './../pipes/abilitiesFilter.pipe';
// import { SearchPipe } from './../pipes/search.pipe';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component'

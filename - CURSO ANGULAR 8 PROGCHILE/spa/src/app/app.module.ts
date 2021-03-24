import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes se registran abajo en declarations
import { APP_ROUTING, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { AnimalTarjetaComponent } from './componentes/animal-tarjeta/animal-tarjeta.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnimalesService } from './servicios/animales.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalComponent,
    AnimalTarjetaComponent,
    AnimalesComponent,
    NavbarComponent,
    BuscadorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    AnimalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

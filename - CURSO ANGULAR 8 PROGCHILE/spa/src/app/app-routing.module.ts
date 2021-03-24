import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';


// en este archivo se manejas todas las rutas de los componentes



const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'animales', component: AnimalesComponent},
  { path: 'animal/:id', component: AnimalComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
// esta linea revisa todas las rutas y trata de hacer match sino pilla alguna te lleva al home
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { SubdComponent } from './compa/subd/subd.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { SubaComponent } from './suba/suba.component';
import { SubbComponent } from './subb/subb.component';
import { SubcComponent } from './subc/subc.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    SubdComponent,
    CompbComponent,
    CompcComponent,
    SubaComponent,
    SubbComponent,
    SubcComponent
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line:comment-format
    AppRoutingModule //acá se registra el módulo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FacturasComponent } from './facturas/facturas.component';



@NgModule({
  declarations: [FacturasComponent],
  imports: [
    CommonModule,
    // RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FacturasModule { }

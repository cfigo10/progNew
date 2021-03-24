import { SubdComponent} from './compa/subd/subd.component';
import { SubcComponent} from './subc/subc.component';
import { SubbComponent} from './subb/subb.component';
import { SubaComponent} from './suba/suba.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent} from './compb/compb.component';
import { CompcComponent} from './compc/compc.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';



const routes: Routes = [
  {
    // compa/subb
    // compa/subc

    path: 'compa', component: CompaComponent, children: [
      { path: 'subb', component: SubbComponent },
      { path: 'subc', component: SubcComponent },
      { path: 'subd', component: SubdComponent },
    ]
  },
    { path: 'compb', component: SubbComponent },
    { path: 'compc', component: SubcComponent },
    { path: 'suba', component: SubdComponent },

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  {
    path: '',
    data: { title:''},
    children:[
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path:'home', component: HomeComponent },
      { path:'home/:category', component: HomeComponent },
      { path: 'details/:movie', component: MovieDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

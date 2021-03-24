import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimalesService} from '../../servicios/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html'
})
export class AnimalComponent {

  animal:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _animalesService:AnimalesService) {
      this.activatedRoute.params.subscribe(params=>{
        this.animal = this._animalesService.getAnimal(params['id']);
        console.log(this.animal);
      })
  }



}

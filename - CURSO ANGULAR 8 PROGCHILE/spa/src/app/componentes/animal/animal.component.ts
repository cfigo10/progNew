import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../../servicios/animales.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  animal: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _animalesService: AnimalesService) {
    this.activatedRoute.params.subscribe(params => {
      this.animal = this._animalesService.getAnimal(params['id']);
      console.log(this.animal);
    });
  }
}

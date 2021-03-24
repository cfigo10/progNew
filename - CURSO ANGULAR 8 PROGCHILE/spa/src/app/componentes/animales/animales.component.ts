import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalesService, Animal } from '../../servicios/animales.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: Animal[] = [];

  constructor(private _animalesService: AnimalesService, private router: Router) { }

  ngOnInit() {
    this.animales = this._animalesService.getAnimales(); //aqui estoy utilizando un metodo prestado de la clase service
    //console.log(this.animales);
  }
  verAnimal(idx: number){
    this.router.navigate(['animal', idx]);
    //console.log(idx);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-tarjeta',
  templateUrl: './animal-tarjeta.component.html',
  styleUrls: ['./animal-tarjeta.component.css']
})
export class AnimalTarjetaComponent implements OnInit {

  @Input() animal: any = {};
  @Input() index: number;
  @Output() animalSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.animalSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verAnimal(){
    this.router.navigate(['/animal', this.index]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  texto: string;

  avisos: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];

  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje(event){
    this.texto = event + ' marcado como leido';
  }

}

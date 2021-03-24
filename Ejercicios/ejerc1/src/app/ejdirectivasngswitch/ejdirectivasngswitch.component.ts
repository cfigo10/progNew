import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivasngswitch',
  templateUrl: './ejdirectivasngswitch.component.html',
  styleUrls: ['./ejdirectivasngswitch.component.css']
})
export class EjdirectivasngswitchComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    {nombre: 'Kareem Abdul-Jabbar', equipo: 'L.A. Lakers'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

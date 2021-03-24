import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit () {
    firebase.initializeApp({
    apiKey: 'AIzaSyDZF07vuSINhzt0DPod31o35G4DAJMDEbs',
    authDomain: 'appcomprasrouting.firebaseapp.com'
    });
  }
}
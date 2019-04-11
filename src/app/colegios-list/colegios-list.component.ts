import { Component, OnInit } from '@angular/core';
import { ColegiosService  } from "../services/colegios.service";

@Component({
  selector: 'app-colegios-list',
  templateUrl: './colegios-list.component.html',

  styleUrls: ['./colegios-list.component.css']
})
export class ColegiosListComponent implements OnInit {
  colegios;
  latitud: number = -9;
  longitud: number = -79;
  mapType = 'satellite';
 
  constructor(private colegiosService : ColegiosService) { }

  ngOnInit() {
    this.getColegios();
    console.log('Hola');
  }

  getColegios=() =>
    this.colegiosService.getColegios().subscribe
    (
      res =>{(this.colegios = res); console.log(this.colegios[0].payload.doc.data().Latitud)}
    );
   
}

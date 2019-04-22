import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColegiosService  } from "../services/colegios.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-colegios-list',
  templateUrl: './colegios-list.component.html',

  styleUrls: ['./colegios-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColegiosListComponent implements OnInit {
  colegios;
  colegio;
  latitud: number = -9;
  longitud: number = -79;
  markers=[];
  selectedMarker;
  datos;
  images;
  searchText;
  constructor(private colegiosService : ColegiosService) { }

    ngOnInit() {
      this.getColegiosRegion();
    }

    addMarker(lat: number, lng: number, codlocal:string) {
      this.markers.push({ lat, lng, codlocal});
    }

    max(coordType: 'lat' | 'lng'): number {
      return Math.max(...this.markers.map(marker => marker[coordType]));
    }
  
    min(coordType: 'lat' | 'lng'): number {
      return Math.min(...this.markers.map(marker => marker[coordType]));
    }

    selectMarker(event,codlocal) {

      this.selectedMarker = {
        lat: event.latitude,
        lng: event.longitude,
        codlocal : codlocal
      };

      this.getColegioByCodLocal(codlocal);
    }
   
    getColegiosRegion=() =>
    this.colegiosService.getColegiosByRegion().subscribe
    (
      res =>{
              this.colegios = res; 
              console.log(this.colegios);
              console.log(this.colegios.length);
              for (let i = 0 ; i < this.colegios.length;i++){
                this.addMarker(this.colegios[i].payload.doc.data().Latitud, 
                this.colegios[i].payload.doc.data().Longitud,
                this.colegios[i].payload.doc.data().CodigoLocal);
              }
              this.latitud = (this.max("lat") + this.min("lat"))/2;
              this.longitud = (this.max("lng") + this.min("lng"))/2;
            }
    );
    
    getColegioByCodLocal=(codlocal) =>
    this.colegiosService.getColegioCodLocal(codlocal).subscribe
    (
         data=>{ 
           
          this.datos = data[0].payload.doc.data();
      
          console.log(this.datos);

          this.images = this.datos.imagenes;
        
         }
    )
}

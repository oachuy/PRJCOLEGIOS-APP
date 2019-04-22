import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { whenRendered } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  constructor( private firestore :AngularFirestore) { }

  getColegiosByRegion(){
    return this.firestore.collection("colegios",ref=> ref.where("Region","==","APURIMAC").limit(9)).snapshotChanges();

  }

  getColegioCodLocal(codLocal :string){
    console.log(codLocal);
    return this.firestore.collection("colegios",ref=> ref.where("CodigoLocal","==",codLocal)).snapshotChanges();
  }
}

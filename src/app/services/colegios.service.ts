import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  constructor( private firestore :AngularFirestore) { }

  getColegios(){
    return this.firestore.collection("colegios").snapshotChanges();

  }
}

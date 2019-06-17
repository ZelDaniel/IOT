import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor( private db: AngularFireDatabase ) {
  }
  getData( dataset : string ) {
    return this.db.list ( dataset )
  }
  }

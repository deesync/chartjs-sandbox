import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirefetchService {
  data: Observable<any>;
  options: Observable<any>;

  public dataRef: AngularFireObject<unknown>;
  
  constructor(db: AngularFireDatabase) {
    this.dataRef = db.object('data');

    this.data = db.object('data').snapshotChanges();
    this.options = db.object('options').snapshotChanges();    
  }
}

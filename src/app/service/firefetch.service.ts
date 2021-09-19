import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirefetchService {
  data: Observable<any>;
  options: Observable<any>;
  
  constructor(db: AngularFireDatabase) {
    this.data = db.object('data').snapshotChanges();
    this.options = db.object('options').snapshotChanges();
  }
}

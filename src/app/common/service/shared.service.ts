import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  passData = new BehaviorSubject(null);
  constructor() {

  }

  getRecords() {
    return of({
      name: 'suhail'
    });
  }
}

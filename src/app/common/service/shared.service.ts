import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  passData = new Subject();
  constructor() {

  }

  getRecords() {
    return of({
      name: 'suhail'
    });
  }
}

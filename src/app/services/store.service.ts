import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private animateHeader = new BehaviorSubject<boolean>(false);
  private animateHeader$ = this.animateHeader.asObservable();
  constructor() { }

  setAnimateHeader(val: boolean){
    this.animateHeader.next(val);
  }

  getAnimateHeader$(){
    return this.animateHeader$;
  }
}

import { AnimationController } from '@ionic/angular';
import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private animationcontroller: AnimationController) { }

  fadeInOut(elemRef: ElementRef, duration: number){
    const animation = this.animationcontroller.create().addElement(elemRef.nativeElement).duration(duration)
    .iterations(Infinity)
    .keyframes([
      {  offset: 0,opacity: '0' },
      { offset: 0.5,  opacity: '1' },
      { offset: 1,  opacity: '0' }
    ]);
    this.animationcontroller.create().addAnimation([animation]).play();
  }
}

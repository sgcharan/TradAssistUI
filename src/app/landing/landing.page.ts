import { AnimationService } from './../services/animation.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { greets } from './landing.constants';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { async } from '@firebase/util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterViewInit {
  @ViewChild('greettxt') greettxt: ElementRef;

  greet: Observable<string>;
  greetssr: string = greets[0];
  counter = 1;

  constructor(private animationservice: AnimationService,private titleService: Title, private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object) {
    // if(isPlatformBrowser(this.platformId)){
    //   this.greet = timer(0,5000).pipe(map(v => greets[v % greets.length]));
    // }
   // if(isPlatformServer(this.platformId)){
    //}
    let i;
    for(i=0; i<greets.length;i++){
      this.greetssr = greets[i];
      setTimeout(() => {
      }, 5000);
    }
   }



  ngAfterViewInit(): void {
   this.animateGreet();
   //this.greetCycle();

  }

  animateGreet(){
    this.animationservice.fadeInOut(this.greettxt,5000);
  }

  ngOnInit() {
    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({ name: 'description', content: 'The Devdactic SSR Page' });

  }

}

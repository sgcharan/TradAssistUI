import { StoreService } from './../services/store.service';
import { AnimationService } from './../services/animation.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { greets, features } from './landing.constants';
import { Meta, Title } from '@angular/platform-browser';
import { SelectCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('greettxt') greettxt: ElementRef;

  greet: Observable<string>;
  features = features;
  animateHeader: boolean;

  constructor(private animationservice: AnimationService, private title: Title, private meta: Meta,
              private store: StoreService) {
    this.greet = timer(0,5000).pipe(map(v => greets[v % greets.length]));
    this.title.setTitle('TradAssist');
    this.meta.addTags([{name: 'description', content: 'An assistant for you or your community to help follow tradiotions the right way!'},
                       {name: 'keywords', content:'Tradition, Community, Assitant, Traditioned, Application, Website'}]);
   }

  ngAfterViewInit(): void {
   this.animateGreet();
  }

  animateGreet(){
    this.animationservice.fadeInOut(this.greettxt,5000);
  }

  ngOnInit() {
  }

  scrollEvent(event: any){
    if(event.detail.deltaY > -1)
      {this.store.setAnimateHeader(true);}
    else
      {this.store.setAnimateHeader(false);}
  }

  login(){
    this.store.setAnimateHeader(true);
  }

  ngOnDestroy(): void {
  }
}

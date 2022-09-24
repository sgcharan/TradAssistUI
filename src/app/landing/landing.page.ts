/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { StoreService } from './../services/store.service';
import { AnimationService } from './../services/animation.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { greets, features } from './landing.constants';
import { Meta, Title } from '@angular/platform-browser';
import { IonContent, ScrollBaseDetail, ScrollDetail, SelectCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('greettxt') greettxt: ElementRef;

  @ViewChild('landingcontent') content: ElementRef;
  scrollevent: CustomEvent<ScrollDetail>;

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

  scrollEvent(event: CustomEvent<ScrollDetail>){
    if(event.detail.deltaY > -1)
      {this.store.setAnimateHeader(true);}
    else
      {this.store.setAnimateHeader(false);}

      this.scrollevent = event;

  }

  scrollEnd(event: CustomEvent<ScrollBaseDetail>){
    //console.log('end ',this.scrollevent.detail.scrollTop);
    if(this.scrollevent.detail.scrollTop < 100)
    {
      this.scrollToTop(event, 200);
    }
    else if (this.scrollevent.detail.scrollTop >=  100 && this.scrollevent.detail.scrollTop < 400){
      this.scrollToPoint(event,null,550, 1000);
    }
  }

  private scrollToTop(event: CustomEvent<ScrollBaseDetail>, duration: number) {
    event.target['scrollToTop'](duration);
  }

  private scrollToPoint(event: CustomEvent<ScrollBaseDetail>,
                        x: number | undefined | null,
                        y: number | undefined | null,
                        duration: number) {
    event.target['scrollToPoint'](x,y,duration);
  }

  login(){
    this.store.setAnimateHeader(true);
  }

  ngOnDestroy(): void {
  }
}

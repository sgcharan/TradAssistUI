import { AnimationService } from './../services/animation.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { greets } from './landing.constants';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterViewInit {
  @ViewChild('greettxt') greettxt: ElementRef;

  greet: Observable<string>;

  constructor(private animationservice: AnimationService, private title: Title, private meta: Meta) {
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

}

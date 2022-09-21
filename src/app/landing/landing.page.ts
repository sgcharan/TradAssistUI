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

  constructor(private animationservice: AnimationService,private titleService: Title, private metaService: Meta) {
    this.greet = timer(0,5000).pipe(map(v => greets[v % greets.length]));
   }

  ngAfterViewInit(): void {
   this.animateGreet();
  }

  animateGreet(){
    this.animationservice.fadeInOut(this.greettxt,5000);
  }

  ngOnInit() {
    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({ name: 'description', content: 'The Devdactic SSR Page' });
  }

}

import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Injector } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,AfterViewInit {
  @ViewChild('greet',) greetElemRef: ElementRef;
  @ViewChild('welcome',) welocmeElemRef: ElementRef;


  constructor(private animationController: AnimationController) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const greetanimation = this.animationController
                         .create()
                         .addElement(this.greetElemRef.nativeElement)
                         .duration(750)
                         .fromTo('opacity',0,1);
    // const welcomeanimation = this.animationController
    //                      .create()
    //                      .addElement(this.welocmeElemRef.nativeElement)
    //                      .duration(500)
    //                      .delay(200)
    //                      .fromTo('opacity',0,1);
     this.animationController.create().addAnimation([greetanimation]).play();
   }

}

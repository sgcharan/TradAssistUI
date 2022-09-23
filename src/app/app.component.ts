import { Subscription } from 'rxjs';
import { StoreService } from './services/store.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isBg = false;
  headerAnim$: Subscription;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.headerAnim$ = this.store.getAnimateHeader$().subscribe((val) => this.isBg = val);

  }

  ngOnDestroy(): void {
    this.headerAnim$.unsubscribe();
  }

}

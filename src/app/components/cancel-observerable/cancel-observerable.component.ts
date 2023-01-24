import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-cancel-observerable',
  templateUrl: './cancel-observerable.component.html',
  styleUrls: ['./cancel-observerable.component.scss'],
})
export class CancelObserverableComponent implements OnDestroy {
  intervalSubscription!:Subscription;
  intervalState!: string;
  constructor() {
    let observable$ = interval(500);
    this.intervalSubscription=  observable$.subscribe(
      (next) => {
        console.log('timer logs',next);
        this.intervalState = 'timer logs'+next;
      },
      (error) => {},
      () => {}
    );
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();

  }
  stopInterval(){
    this.intervalSubscription.unsubscribe();
  }

  
}

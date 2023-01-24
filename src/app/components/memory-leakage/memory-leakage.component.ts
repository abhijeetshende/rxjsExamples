import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leakage',
  templateUrl: './memory-leakage.component.html',
  styleUrls: ['./memory-leakage.component.scss'],
})
export class MemoryLeakageComponent implements OnInit, OnDestroy {
  newObservable: Observable<number>;
  timerSubscription!: Subscription;
  constructor() {
    this.newObservable = new Observable((observer) => {
      let count = 0;
      let interval = setInterval(() => {
        console.log('coming from observal');
        observer.next(count++);
      }, 1000);
      return () => {
        clearInterval(interval);  // THIS IS IMPORTANT FOR CLEAN UP
      };
    });
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.timerSubscription = this.newObservable.subscribe((data: any) => {
      console.log('data after subscription', data);
    });
  }

  cancel() {
    this.timerSubscription.unsubscribe();
  }
}

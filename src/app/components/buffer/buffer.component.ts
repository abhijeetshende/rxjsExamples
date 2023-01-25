import { Component, OnDestroy, OnInit } from '@angular/core';
import { buffer, fromEvent, interval, pipe, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss'],
})
export class BufferComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;

  ngOnInit(): void {
    let interval$ = interval(1000);
    const clicks = fromEvent(document, 'click');

    this.intervalSubscription = interval$
      .pipe(buffer(clicks))
      .subscribe((x) => console.log(x));
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  collectBuffer() {
    console.log('collect buffer called');
  }
}

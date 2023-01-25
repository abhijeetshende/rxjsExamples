import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferCount, fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss'],
})
export class BufferCountComponent implements OnInit, OnDestroy {
  intervalSubscription$! :Subscription;
  ngOnInit(): void {
    // const clicks = fromEvent(document, 'click');
    interval(1000)
      .pipe(bufferCount(3,2))
      .subscribe((x) => console.log(x));
  }
  ngOnDestroy(): void {
    this.intervalSubscription$.unsubscribe();
  }
}

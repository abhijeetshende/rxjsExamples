import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, take, takeUntil } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements AfterViewInit {
  constructor() {
     }
  ngAfterViewInit(): void {
    let interval$ = interval(1000);
    let click$ = fromEvent(document.getElementById('stop')!, 'click');
    interval$.pipe(takeUntil(click$)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );

  }
}

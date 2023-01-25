import { Component } from '@angular/core';
import { fromEvent, interval, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.scss']
})
export class SkipUntilComponent {
  ngAfterViewInit(): void {
    let interval$ = interval(1000);
    let click$ = fromEvent(document.getElementById('start')!, 'click');
    interval$.pipe(skipUntil(click$)).subscribe(
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

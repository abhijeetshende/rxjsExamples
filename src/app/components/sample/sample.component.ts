import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, interval, of, sample } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    let btn$ = fromEvent(document.getElementById('now')!, 'click');
    let interval$ = interval(1000);
    interval$
      .pipe(sample(btn$))

      .subscribe(
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

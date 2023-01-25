import { Component } from '@angular/core';
import { interval, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent {
  constructor() {
    let interval$ = interval(200);
    interval$.pipe(take(10), skip(4)).subscribe(
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

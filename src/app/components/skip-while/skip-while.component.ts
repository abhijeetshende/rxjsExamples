import { Component } from '@angular/core';
import { interval, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.scss'],
})
export class SkipWhileComponent {
  constructor() {
    let interval$ = interval(1000);
    interval$.pipe(skipWhile((x) => x < 5),take(5)).subscribe(
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

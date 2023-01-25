import { Component } from '@angular/core';
import { distinct, distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent {
  constructor() {
    let interval$ = of(
      1,
      1,
      1,
      1,
  
      6,
      5,
      7,
      6,
      3
    );
    interval$
      .pipe(
        distinctUntilChanged((prev, current) => {
          return prev == current;
        })
      )
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

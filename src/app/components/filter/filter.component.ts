import { Component } from '@angular/core';
import { bufferCount, distinct, filter, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  constructor() {
    let allowedArr = [11, 2, 2, 4, 2, 3, 5];
    let interval$ = of(1, 2, 2, 4, 2, 3, 5, 7, 7, 2, 11);
    interval$
      .pipe(
        filter((element) => {
          return allowedArr.includes(element);
        }),
        // distinct(),
        // bufferCount(2)
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

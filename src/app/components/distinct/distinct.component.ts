import { Component } from '@angular/core';
import { distinct, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent {
  constructor() {
    let interval$ = of(1,1,1,1,1,2,2,4,1,1,5,111,11,5,13,5,135,124,5,1231,31145,151,2,4,1,3,5,1,3,5,1,5,4,6,5,7,6,3);
    interval$.pipe(distinct()).subscribe(
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

import { Component } from '@angular/core';
import { interval, skip, skipLast, take } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.scss']
})
export class SkipLastComponent {
constructor(){
  let interval$ = interval(200);
  interval$.pipe(take(10), skipLast(4)).subscribe(
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

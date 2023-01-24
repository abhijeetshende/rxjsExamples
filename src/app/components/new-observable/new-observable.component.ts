import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.scss'],
})
export class NewObservableComponent {
  constructor() {
    let o = new Observable((observer) => {
      for (const i of [1, 2, 3, 4, 5, 6]) {
        observer.next(i);
      }
      observer.complete();
    });

    o.subscribe(
      (next) => {
        console.log(next);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}

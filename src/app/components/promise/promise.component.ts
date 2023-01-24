import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' promise data is resolved');
    }, 4000);
  });

  promise$ = from(this.promise);
  constructor() {
    this.promise$.subscribe(
      (next) => {
        console.log(next);
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

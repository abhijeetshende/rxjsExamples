import { Component } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
})
export class ArrayComponent {
  postArray: { name: string }[] = [
    { name: 'Abhijeet' },
    { name: 'abhijeet2' },
    { name: 'abhijeet3' },
  ];
  postArray$ = from(this.postArray);
  constructor() {
    this.postArray$.subscribe(
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

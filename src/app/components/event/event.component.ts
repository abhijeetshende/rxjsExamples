import { AfterViewInit, Component } from '@angular/core';
import {  fromEvent,  Observer } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements AfterViewInit {

  constructor() {
  }
  ngAfterViewInit(): void {
 fromEvent(document.getElementById('elem')!,'click').subscribe(
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

import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
  constructor(){
    let interval$ = interval(1000);
    interval$
    .pipe(take(4))
    .subscribe((data)=>{console.log(data);},(error)=>{console.log(error);},()=>{console.log('complete');})
  }
}

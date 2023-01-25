import { Component } from '@angular/core';
import { interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent {
  constructor(){
    let interval$ = interval(1000);
    interval$
    .pipe(take(5),takeLast(1))
    .subscribe((data)=>{console.log(data);},(error)=>{console.log(error);},()=>{console.log('complete');})
  }
}



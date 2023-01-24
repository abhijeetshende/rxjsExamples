import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-mapandfilter',
  templateUrl: './mapandfilter.component.html',
  styleUrls: ['./mapandfilter.component.scss']
})
export class MapandfilterComponent implements OnInit,OnDestroy{
  timerSubscription!:Subscription;
  ngOnInit(): void {
    let observable$ = interval(1000)
    this.timerSubscription = observable$.pipe(
      filter((data)=>{
        return data % 2 ===0;
      }),
      map((data)=>{
        return "even number +"+ data;
      })
    )
    .subscribe((res)=>{
      console.log('subscriped data',res);
      
    })
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
  cancel(){
    this.timerSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferToggle, interval, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.scss'],
})
export class BufferToggleComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    let interval$ = interval(1000);
    let starting$ = interval(2000).pipe( tap(()=>{console.log('Starting');
    }), map((data) => data + 'Starting'));
    let closeing$ = interval(5000).pipe(  tap(()=>{console.log('Closing');
    }), map((data) => data + 'Closing'));
   this.subscription =  interval$.pipe(bufferToggle(starting$, (value)=>closeing$)).subscribe((data)=>console.log(data));
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

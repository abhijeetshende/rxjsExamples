import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buffer } from 'rxjs';
import { ArrayComponent } from './components/array/array.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferToggleComponent } from './components/buffer-toggle/buffer-toggle.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { CancelObserverableComponent } from './components/cancel-observerable/cancel-observerable.component';
import { EventComponent } from './components/event/event.component';
import { MapandfilterComponent } from './components/mapandfilter/mapandfilter.component';
import { MemoryLeakageComponent } from './components/memory-leakage/memory-leakage.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { PromiseComponent } from './components/promise/promise.component';
import { SkipLastComponent } from './components/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-while/skip-while.component';
import { SkipComponent } from './components/skip/skip.component';
import { TakeLastComponent } from './components/take-last/take-last.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { TakeComponent } from './components/take/take.component';

const routes: Routes = [
  {
    path: 'array',
    component: ArrayComponent,
  },
  {
    path: 'promise',
    component: PromiseComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path:'observable',
    component:NewObservableComponent
  },
  {
    path:'cobservable',
    component:CancelObserverableComponent
  },
  {
    path:'memory',
    component:MemoryLeakageComponent
  },
  {
    path:'mapandfilter',
    component:MapandfilterComponent
  },
  {
    path:'buffer',
    component:BufferComponent
  },
  {
    path:'bufferCount',
    component:BufferCountComponent
  },
  
  {
    path:'bufferToggle',
    component:BufferToggleComponent
  },
    
  {
    path:'take',
    component:TakeComponent
  },
  {
    path:'takelast',
    component:TakeLastComponent
  },
  {
    path:'takeuntil',
    component:TakeUntilComponent
  },
  {
    path:'skip',
    component:SkipComponent
  },
  {
    path:'skipUntil',
    component:SkipUntilComponent
  },
  {
    path:'skipWhile',
    component:SkipWhileComponent
  },
  {
    path:'skipLast',
    component:SkipLastComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

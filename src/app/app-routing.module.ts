import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buffer } from 'rxjs';
import { ArrayComponent } from './components/array/array.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { CancelObserverableComponent } from './components/cancel-observerable/cancel-observerable.component';
import { EventComponent } from './components/event/event.component';
import { MapandfilterComponent } from './components/mapandfilter/mapandfilter.component';
import { MemoryLeakageComponent } from './components/memory-leakage/memory-leakage.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { PromiseComponent } from './components/promise/promise.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

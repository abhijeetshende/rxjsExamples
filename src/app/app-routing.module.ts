import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './components/array/array.component';
import { EventComponent } from './components/event/event.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

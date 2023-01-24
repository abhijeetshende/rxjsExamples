import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './components/array/array.component';
import { EventComponent } from './components/event/event.component';
import { PromiseComponent } from './components/promise/promise.component';

const routes: Routes = [
  {
    path:'array',component:ArrayComponent
  },
  {
    path:'promise',component:PromiseComponent
  },  {
    path:'event',component:EventComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

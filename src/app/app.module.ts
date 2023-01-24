import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './components/array/array.component';
import { PromiseComponent } from './components/promise/promise.component';
import { EventComponent } from './components/event/event.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { CancelObserverableComponent } from './components/cancel-observerable/cancel-observerable.component';
import { MemoryLeakageComponent } from './components/memory-leakage/memory-leakage.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    PromiseComponent,
    EventComponent,
    NewObservableComponent,
    CancelObserverableComponent,
    MemoryLeakageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

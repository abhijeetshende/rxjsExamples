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
import { MapandfilterComponent } from './components/mapandfilter/mapandfilter.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferToggleComponent } from './components/buffer-toggle/buffer-toggle.component';
import { TakeComponent } from './components/take/take.component';
import { TakeLastComponent } from './components/take-last/take-last.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { TakeWhileComponent } from './components/take-while/take-while.component';
import { SkipComponent } from './components/skip/skip.component';
import { SkipLastComponent } from './components/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-while/skip-while.component';
import { DistinctComponent } from './components/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './components/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './components/filter/filter.component';
import { SampleComponent } from './components/sample/sample.component';
import { AuditComponent } from './components/audit/audit.component';
import { ThrottleComponent } from './components/throttle/throttle.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    PromiseComponent,
    EventComponent,
    NewObservableComponent,
    CancelObserverableComponent,
    MemoryLeakageComponent,
    MapandfilterComponent,
    BufferComponent,
    BufferCountComponent,
    BufferToggleComponent,
    TakeComponent,
    TakeLastComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    SampleComponent,
    AuditComponent,
    ThrottleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

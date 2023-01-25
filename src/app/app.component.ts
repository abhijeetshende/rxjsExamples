import { Component } from '@angular/core';

interface sidebarLinks {
  linkname: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjsExamples';
    tutorialLinks: sidebarLinks[] = [
    { linkname: 'Array', routerLink: 'array' },
    { linkname: 'Promise', routerLink: 'promise' },
    { linkname: 'Event', routerLink: 'event' },
    { linkname: 'New Observable', routerLink: 'observable' },
    { linkname: 'Cancel Observable', routerLink: 'cobservable' },
    { linkname: 'memoryLeakage ', routerLink: 'memory' },
    { linkname: 'mapandfilter ', routerLink: 'mapandfilter' },
    { linkname: 'buffer ', routerLink: 'buffer' },
    { linkname: 'bufferCount ', routerLink: 'bufferCount' },
    { linkname: 'bufferToggle ', routerLink: 'bufferToggle' },
    { linkname: 'Take ', routerLink: 'take' },
    { linkname: 'TakeLast ', routerLink: 'takelast' },
    { linkname: 'TakeUntil ', routerLink: 'takeuntil' },
    { linkname: 'skip ', routerLink: 'skip' },
    { linkname: 'skipLast ', routerLink: 'skipLast' },
    { linkname: 'skipUntil ', routerLink: 'skipUntil' },
    { linkname: 'skipWhile ', routerLink: 'skipWhile' },
    { linkname: 'Distinct ', routerLink: 'distinct' },
    { linkname: 'DistinctUtil ', routerLink: 'distinctUntil' },
  ];  
}

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

  ];
}

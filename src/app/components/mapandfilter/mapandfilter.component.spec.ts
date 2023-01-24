import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapandfilterComponent } from './mapandfilter.component';

describe('MapandfilterComponent', () => {
  let component: MapandfilterComponent;
  let fixture: ComponentFixture<MapandfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapandfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapandfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

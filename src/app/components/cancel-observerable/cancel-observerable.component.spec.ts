import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelObserverableComponent } from './cancel-observerable.component';

describe('CancelObserverableComponent', () => {
  let component: CancelObserverableComponent;
  let fixture: ComponentFixture<CancelObserverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelObserverableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelObserverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

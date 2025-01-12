import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyComponent } from './calendly.component';

describe('CalendlyComponent', () => {
  let component: CalendlyComponent;
  let fixture: ComponentFixture<CalendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

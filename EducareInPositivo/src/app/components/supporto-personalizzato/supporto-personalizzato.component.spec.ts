import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportoPersonalizzatoComponent } from './supporto-personalizzato.component';

describe('SupportoPersonalizzatoComponent', () => {
  let component: SupportoPersonalizzatoComponent;
  let fixture: ComponentFixture<SupportoPersonalizzatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportoPersonalizzatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportoPersonalizzatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

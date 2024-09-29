import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaypalComponent } from './modal-paypal.component';

describe('ModalPaypalComponent', () => {
  let component: ModalPaypalComponent;
  let fixture: ComponentFixture<ModalPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPaypalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

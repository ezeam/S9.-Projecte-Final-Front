import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercorsoEducareComponent } from './percorso-educare.component';

describe('PercorsoEducareComponent', () => {
  let component: PercorsoEducareComponent;
  let fixture: ComponentFixture<PercorsoEducareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercorsoEducareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercorsoEducareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

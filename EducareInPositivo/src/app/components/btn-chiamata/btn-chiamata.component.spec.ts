import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnChiamataComponent } from './btn-chiamata.component';

describe('BtnChiamataComponent', () => {
  let component: BtnChiamataComponent;
  let fixture: ComponentFixture<BtnChiamataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnChiamataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnChiamataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChiSonoComponent } from './home-chi-sono.component';

describe('HomeChiSonoComponent', () => {
  let component: HomeChiSonoComponent;
  let fixture: ComponentFixture<HomeChiSonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChiSonoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChiSonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

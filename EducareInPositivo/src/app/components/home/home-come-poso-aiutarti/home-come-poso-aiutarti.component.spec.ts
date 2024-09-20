import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComePosoAiutartiComponent } from './home-come-poso-aiutarti.component';

describe('HomeComePosoAiutartiComponent', () => {
  let component: HomeComePosoAiutartiComponent;
  let fixture: ComponentFixture<HomeComePosoAiutartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComePosoAiutartiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComePosoAiutartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

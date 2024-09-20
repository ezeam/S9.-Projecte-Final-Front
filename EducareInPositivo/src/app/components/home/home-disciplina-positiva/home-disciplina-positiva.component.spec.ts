import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisciplinaPositivaComponent } from './home-disciplina-positiva.component';

describe('HomeDisciplinaPositivaComponent', () => {
  let component: HomeDisciplinaPositivaComponent;
  let fixture: ComponentFixture<HomeDisciplinaPositivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDisciplinaPositivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDisciplinaPositivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

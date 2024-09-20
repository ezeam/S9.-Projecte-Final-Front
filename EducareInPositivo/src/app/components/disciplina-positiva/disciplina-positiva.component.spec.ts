import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaPositivaComponent } from './disciplina-positiva.component';

describe('DisciplinaPositivaComponent', () => {
  let component: DisciplinaPositivaComponent;
  let fixture: ComponentFixture<DisciplinaPositivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinaPositivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinaPositivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

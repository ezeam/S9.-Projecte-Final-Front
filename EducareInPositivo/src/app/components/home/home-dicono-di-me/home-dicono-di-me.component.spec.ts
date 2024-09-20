import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiconoDiMeComponent } from './home-dicono-di-me.component';

describe('HomeDiconoDiMeComponent', () => {
  let component: HomeDiconoDiMeComponent;
  let fixture: ComponentFixture<HomeDiconoDiMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDiconoDiMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDiconoDiMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

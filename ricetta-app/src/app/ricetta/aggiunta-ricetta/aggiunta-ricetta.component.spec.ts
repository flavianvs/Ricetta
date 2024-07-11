import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntaRicettaComponent } from './aggiunta-ricetta.component';

describe('AggiuntaRicettaComponent', () => {
  let component: AggiuntaRicettaComponent;
  let fixture: ComponentFixture<AggiuntaRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AggiuntaRicettaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiuntaRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

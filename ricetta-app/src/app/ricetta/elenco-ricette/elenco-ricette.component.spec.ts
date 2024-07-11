import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoRicetteComponent } from './elenco-ricette.component';

describe('ElencoRicetteComponent', () => {
  let component: ElencoRicetteComponent;
  let fixture: ComponentFixture<ElencoRicetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElencoRicetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoRicetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

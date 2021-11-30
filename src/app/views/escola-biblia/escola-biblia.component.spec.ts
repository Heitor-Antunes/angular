import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaBibliaComponent } from './escola-biblia.component';

describe('EscolaBibliaComponent', () => {
  let component: EscolaBibliaComponent;
  let fixture: ComponentFixture<EscolaBibliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaBibliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaBibliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoformComponent } from './insumoform.component';

describe('InsumoformComponent', () => {
  let component: InsumoformComponent;
  let fixture: ComponentFixture<InsumoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsumoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeradosComponent } from './refrigerados.component';

describe('RefrigeradosComponent', () => {
  let component: RefrigeradosComponent;
  let fixture: ComponentFixture<RefrigeradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgMovimientoComponent } from './dlg-movimiento.component';

describe('DlgMovimientoComponent', () => {
  let component: DlgMovimientoComponent;
  let fixture: ComponentFixture<DlgMovimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgMovimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

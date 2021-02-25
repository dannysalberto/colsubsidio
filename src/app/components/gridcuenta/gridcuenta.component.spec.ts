import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcuentaComponent } from './gridcuenta.component';

describe('GridcuentaComponent', () => {
  let component: GridcuentaComponent;
  let fixture: ComponentFixture<GridcuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridcuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

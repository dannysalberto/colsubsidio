import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridclienteComponent } from './gridcliente.component';

describe('GridclienteComponent', () => {
  let component: GridclienteComponent;
  let fixture: ComponentFixture<GridclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

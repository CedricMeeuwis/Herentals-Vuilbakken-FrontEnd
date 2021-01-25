import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuilbakkenComponent } from './vuilbakken.component';

describe('VuilbakkenComponent', () => {
  let component: VuilbakkenComponent;
  let fixture: ComponentFixture<VuilbakkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuilbakkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuilbakkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

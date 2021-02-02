import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesComponent } from './enquetes.component';

describe('EnquetesComponent', () => {
  let component: EnquetesComponent;
  let fixture: ComponentFixture<EnquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

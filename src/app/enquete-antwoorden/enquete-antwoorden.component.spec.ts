import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteAntwoordenComponent } from './enquete-antwoorden.component';

describe('EnqueteAntwoordenComponent', () => {
  let component: EnqueteAntwoordenComponent;
  let fixture: ComponentFixture<EnqueteAntwoordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqueteAntwoordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteAntwoordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

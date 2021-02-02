import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueteEditComponent } from './enquete-edit.component';

describe('EnqueteEditComponent', () => {
  let component: EnqueteEditComponent;
  let fixture: ComponentFixture<EnqueteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnqueteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqueteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

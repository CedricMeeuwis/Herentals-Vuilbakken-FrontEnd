import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVuilbakComponent } from './new-vuilbak.component';

describe('NewVuilbakComponent', () => {
  let component: NewVuilbakComponent;
  let fixture: ComponentFixture<NewVuilbakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVuilbakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVuilbakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

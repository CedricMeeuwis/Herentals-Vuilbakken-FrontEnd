import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WachtVeranderComponent } from './wacht-verander.component';

describe('WachtVeranderComponent', () => {
  let component: WachtVeranderComponent;
  let fixture: ComponentFixture<WachtVeranderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WachtVeranderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WachtVeranderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuilbakkenManageComponent } from './vuilbakken-manage.component';

describe('VuilbakkenManageComponent', () => {
  let component: VuilbakkenManageComponent;
  let fixture: ComponentFixture<VuilbakkenManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuilbakkenManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuilbakkenManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

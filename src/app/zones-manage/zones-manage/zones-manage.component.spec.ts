import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesManageComponent } from './zones-manage.component';

describe('ZonesManageComponent', () => {
  let component: ZonesManageComponent;
  let fixture: ComponentFixture<ZonesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

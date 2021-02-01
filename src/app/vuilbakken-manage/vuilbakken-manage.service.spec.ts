import { TestBed } from '@angular/core/testing';

import { VuilbakkenManageService } from './vuilbakken-manage.service';

describe('VuilbakkenManageService', () => {
  let service: VuilbakkenManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuilbakkenManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

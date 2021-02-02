import { TestBed } from '@angular/core/testing';

import { ZonesManageService } from './zones-manage.service';

describe('ZonesManageService', () => {
  let service: ZonesManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonesManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

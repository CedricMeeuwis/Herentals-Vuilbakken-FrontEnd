import { TestBed } from '@angular/core/testing';

import { ManageVuilbakkenService } from './manage-vuilbakken.service';

describe('ManageVuilbakkenService', () => {
  let service: ManageVuilbakkenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageVuilbakkenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VuilbakService } from './vuilbak.service';

describe('VuilbakService', () => {
  let service: VuilbakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuilbakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VuilbakLoggingService } from './vuilbak-logging.service';

describe('VuilbakLoggingService', () => {
  let service: VuilbakLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VuilbakLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

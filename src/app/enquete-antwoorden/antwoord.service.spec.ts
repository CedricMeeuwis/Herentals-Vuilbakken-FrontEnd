import { TestBed } from '@angular/core/testing';

import { AntwoordService } from './antwoord.service';

describe('AntwoordService', () => {
  let service: AntwoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntwoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

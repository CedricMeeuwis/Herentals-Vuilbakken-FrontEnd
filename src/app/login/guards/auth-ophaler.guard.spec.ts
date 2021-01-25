import { TestBed } from '@angular/core/testing';

import { AuthOphalerGuard } from './auth-ophaler.guard';

describe('AuthOphalerGuard', () => {
  let guard: AuthOphalerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOphalerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

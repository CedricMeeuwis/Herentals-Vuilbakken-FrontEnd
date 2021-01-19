import { TestBed } from '@angular/core/testing';

import { AuthInwonerGuard } from './auth-inwoner.guard';

describe('AuthInwonerGuard', () => {
  let guard: AuthInwonerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthInwonerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

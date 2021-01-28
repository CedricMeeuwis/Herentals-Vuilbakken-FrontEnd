import { TestBed } from '@angular/core/testing';

import { AuthManagersGuard } from './auth-managers.guard';

describe('AuthManagersGuard', () => {
  let guard: AuthManagersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthManagersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IsAdminLoggedGuard } from './is-admin-logged.guard';

describe('IsAdminLoggedGuard', () => {
  let guard: IsAdminLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

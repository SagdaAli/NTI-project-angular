import { TestBed } from '@angular/core/testing';

import { IsNotAdminLoggedGuard } from './is-not-admin-logged.guard';

describe('IsNotAdminLoggedGuard', () => {
  let guard: IsNotAdminLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotAdminLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

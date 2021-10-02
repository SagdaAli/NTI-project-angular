import { TestBed } from '@angular/core/testing';

import { IsNotUserLoggedGuard } from './is-not-user-logged.guard';

describe('IsNotUserLoggedGuard', () => {
  let guard: IsNotUserLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotUserLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

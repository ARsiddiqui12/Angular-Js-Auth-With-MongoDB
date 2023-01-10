import { TestBed } from '@angular/core/testing';

import { MiddlewareGuard } from './middleware.guard';

describe('MiddlewareGuard', () => {
  let guard: MiddlewareGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiddlewareGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

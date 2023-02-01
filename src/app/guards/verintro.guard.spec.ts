import { TestBed } from '@angular/core/testing';

import { VerintroGuard } from './verintro.guard';

describe('VerintroGuard', () => {
  let guard: VerintroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerintroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

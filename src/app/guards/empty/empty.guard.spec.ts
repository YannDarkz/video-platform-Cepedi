import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { emptyGuard } from './empty.guard';

describe('emptyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => emptyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { productDetailsGuard } from './product-details.guard';

describe('productDetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productDetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

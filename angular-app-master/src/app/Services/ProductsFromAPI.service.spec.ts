/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsFromAPIService } from './ProductsFromAPI.service';

describe('Service: ProductsFromAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsFromAPIService]
    });
  });

  it('should ...', inject([ProductsFromAPIService], (service: ProductsFromAPIService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { APIProductService } from './apiproduct.service';

describe('APIProductService', () => {
  let service: APIProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

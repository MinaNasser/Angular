/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipesRequestService } from './recipes-request.service';

describe('Service: RecipesRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesRequestService]
    });
  });

  it('should ...', inject([RecipesRequestService], (service: RecipesRequestService) => {
    expect(service).toBeTruthy();
  }));
});

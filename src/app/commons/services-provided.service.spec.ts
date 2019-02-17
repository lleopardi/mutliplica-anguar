import { TestBed } from '@angular/core/testing';

import { ServicesProvidedService } from './services-provided.service';

describe('ServicesProvidedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesProvidedService = TestBed.get(ServicesProvidedService);
    expect(service).toBeTruthy();
  });
});

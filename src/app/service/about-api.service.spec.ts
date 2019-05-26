import { TestBed } from '@angular/core/testing';

import { AboutApiService } from './about-api.service';

describe('AboutApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutApiService = TestBed.get(AboutApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VacApiService } from './vac-api.service';

describe('VacApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacApiService = TestBed.get(VacApiService);
    expect(service).toBeTruthy();
  });
});

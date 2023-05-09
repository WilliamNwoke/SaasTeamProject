import { TestBed } from '@angular/core/testing';

import { UniverseApiService } from './universe-api.service';

describe('UniverseApiService', () => {
  let service: UniverseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

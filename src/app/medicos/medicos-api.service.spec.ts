import { TestBed } from '@angular/core/testing';

import { MedicosApiService } from './medicos-api.service';

describe('MedicosApiService', () => {
  let service: MedicosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

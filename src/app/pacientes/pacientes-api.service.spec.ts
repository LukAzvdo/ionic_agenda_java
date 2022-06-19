import { TestBed } from '@angular/core/testing';

import { PacientesApiService } from './pacientes-api.service';

describe('PacientesApiService', () => {
  let service: PacientesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

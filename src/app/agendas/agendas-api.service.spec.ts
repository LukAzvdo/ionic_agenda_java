import { TestBed } from '@angular/core/testing';

import { AgendasApiService } from './agendas-api.service';

describe('AgendasApiService', () => {
  let service: AgendasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

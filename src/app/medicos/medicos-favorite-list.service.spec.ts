import { TestBed } from '@angular/core/testing';

import { MedicosFavoriteListService } from './medicos-favorite-list.service';

describe('MedicosFavoriteListService', () => {
  let service: MedicosFavoriteListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicosFavoriteListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

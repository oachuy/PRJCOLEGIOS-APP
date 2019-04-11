import { TestBed } from '@angular/core/testing';

import { ColegiosService } from './colegios.service';

describe('ColegiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColegiosService = TestBed.get(ColegiosService);
    expect(service).toBeTruthy();
  });
});

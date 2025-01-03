import { TestBed } from '@angular/core/testing';

import { SayonaService } from './sayona.service';

describe('SayonaService', () => {
  let service: SayonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

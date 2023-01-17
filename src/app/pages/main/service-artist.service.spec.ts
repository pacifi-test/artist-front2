import { TestBed } from '@angular/core/testing';

import { ServiceArtistService } from './service-artist.service';

describe('ServiceArtistService', () => {
  let service: ServiceArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

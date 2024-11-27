import { TestBed } from '@angular/core/testing';

import { TopLikedVideosService } from './top-liked-videos.service';

describe('TopLikedVideosService', () => {
  let service: TopLikedVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopLikedVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

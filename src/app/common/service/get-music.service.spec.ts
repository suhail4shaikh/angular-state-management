import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetMusicService } from './get-music.service';

describe('GetMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: GetMusicService = TestBed.get(GetMusicService);
    expect(service).toBeTruthy();
  });
});

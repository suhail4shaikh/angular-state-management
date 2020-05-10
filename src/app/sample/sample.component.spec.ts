import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SampleComponent } from './sample.component';
import { GetMusicService } from '../common/service/get-music.service';
import { MusicCardComponent } from '../music-card/music-card.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent, MusicCardComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GetMusicService
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test html ', () => {
    it('h1', () => {
      const headingElm: HTMLElement = fixture.nativeElement.querySelector('.title');
      expect(headingElm.textContent).toEqual('Angular Testing');
    });

    it('test input', () => {
      const searchInputElm = fixture.nativeElement.querySelector('#search');
      // before data binding
      expect(searchInputElm.value).toEqual('');
      searchInputElm.value = 'Anam';
      searchInputElm.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      // after data binding
      expect(searchInputElm.value).toEqual('Anam');
    });
  });
});

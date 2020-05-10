import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicCardComponent } from './music-card.component';
import { SharedService } from '../common/service/shared.service';

describe('MusicCardComponent', () => {
  let component: MusicCardComponent;
  let fixture: ComponentFixture<MusicCardComponent>;
  let common: SharedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MusicCardComponent],
      providers: [SharedService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCardComponent);
    component = fixture.componentInstance;
    common = TestBed.get(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

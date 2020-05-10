import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachMusicComponent } from './serach-music.component';

describe('SerachMusicComponent', () => {
  let component: SerachMusicComponent;
  let fixture: ComponentFixture<SerachMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from '../common/service/shared.service';
import { AppState, IRecord } from '../store/model';
import { SearchAction, AddRecords } from '../store/action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  getRecords: Observable<IRecord>;
  allrecord;

  constructor(
    public common: SharedService,
    private store: Store<AppState>
  ) {
    this.getRecords = this.store.select('allRecords');
  }

  ngOnInit() {

    this.common.passData.subscribe((resp) => {
      this.store.dispatch(new SearchAction());
      this.store.dispatch(new AddRecords(resp));
    });

  }

}

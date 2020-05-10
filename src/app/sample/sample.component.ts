import { Component, OnInit } from '@angular/core';
import { GetMusicService } from '../common/service/get-music.service';
import { SharedService } from '../common/service/shared.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(
    public searchMusic: GetMusicService,
    public common: SharedService
  ) { }

  ngOnInit() {
  }

  getMusic(reuslt: string) {
    this.searchMusic.getRecords(reuslt).subscribe((resp) => {
      this.common.passData.next(resp);
    });
  }

}

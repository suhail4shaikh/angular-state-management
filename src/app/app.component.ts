import { Component, OnInit } from '@angular/core';
import { SharedService } from './common/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-testing';

  constructor(public service: SharedService) {

  }

  ngOnInit() {
    this.service.getRecords().subscribe((res) => {
      this.title = res.name;
    });
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GetMusicService } from '../common/service/get-music.service';
import { SharedService } from '../common/service/shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    filter, tap, catchError
} from 'rxjs/operators';
import { of } from 'rxjs';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, AfterViewInit {

    @ViewChild(CounterComponent, {static: false})
    private counter: CounterComponent;

    form = new FormGroup({
        searchCtrl: new FormControl('')
    });
    constructor(
        public searchMusic: GetMusicService,
        public common: SharedService
    ) { }

    ngOnInit() {

        this.form.get('searchCtrl').valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap(val => console.log(val)),
            filter(val => val.length > 0),
            switchMap(val => this.searchMusic.getRecords(val)),
            catchError((err: Error) => { console.log(err.message); return of({}); })
        ).subscribe(res => this.common.passData.next(res));
    }

    ngAfterViewInit() {
    }

}

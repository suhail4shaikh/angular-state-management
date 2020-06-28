import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    counter = 0;
    timer;
    constructor() { }

    ngOnInit() {
    }

    start() {
        this.timer = setInterval(() => this.counter++, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    reset() {
        clearInterval(this.timer);
        this.counter = 0;
    }

}

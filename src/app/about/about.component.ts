import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        console.log('Router snapshot', this.route.snapshot.paramMap.get('id'));
        this.route.paramMap.subscribe(params => {
            console.log(params.get('id'));
        });
    }

}

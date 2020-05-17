import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        usernameCtrl: new FormControl('suhail'),
        passwordCtrl: new FormControl('')
    });

    constructor() { }

    ngOnInit() {
        this.loginForm.get('usernameCtrl').valueChanges.subscribe(res => console.log(res));
        this.loginForm.valueChanges.subscribe((res) => console.log(res));
    }

}

import {Component} from 'angular2/core';

@Component({
    selector: 'sign-up',
    templateUrl: './app/signup/signup.html'
})
export class SignUpComponent {
    //here happens the magic. `username` is always restored from the localStorage when you reload the site
    // @LocalStorage() public username:string = '';

    constructor() {
     
    }
}

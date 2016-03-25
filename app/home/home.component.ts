import {Component} from 'angular2/core';
import {LocalStorage} from "angular2-localstorage/LocalStorage";

@Component({
    selector: 'home',
    templateUrl: './app/home/home.html'
})
export class HomeComponent {
    //here happens the magic. `username` is always restored from the localStorage when you reload the site
    // @LocalStorage() public username:string = '';

    public usernameKey: string = "username";
    public username: string;
    public passwordKey: string = "password";
    public password: string;

    constructor() {
        let key = "test";
        let value = "jai ganesh";
        var storageValue = localStorage.getItem(key) || null;
        // alert(storageValue);
    }

    setValue() {
        console.log(this.usernameKey + ": " + this.username);
        console.log(this.passwordKey + ": " + this.password);

        localStorage.setItem(this.usernameKey, this.username);
        localStorage.setItem(this.passwordKey, this.password);

    }
    getValue() {
        var savedUserName = localStorage.getItem(this.usernameKey) || null;
        var savedPassword = localStorage.getItem(this.passwordKey) || null;
        
        console.log(this.usernameKey + ": " + savedUserName);
        console.log(this.passwordKey + ": " + savedPassword);
    }
    //here happens the magic. `rememberMe` is always restored from the localStorage when you reload the site
    // @LocalStorage() public rememberMe:boolean = false;
}

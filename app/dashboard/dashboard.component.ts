import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {User} from '../models/user.model';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
})
export class DashboardComponent {

    public username: string;
    public password: string;

    allUsersKey = "users";
    allUsers: Array<User>;

    constructor() {
        this.allUsers = JSON.parse(localStorage.getItem(this.allUsersKey));
        if (!this.allUsers) {
            this.allUsers = new Array<User>();
        }
    }
    login() {
        var user = this.allUsers.find(x => x.id === this.username && x.password === this.password);
        if (user) {
            Materialize.toast('Welcome ' + this.username, 3000)
        }
        else{
            Materialize.toast('Incorrect username or password', 3000)
        }
    }
}

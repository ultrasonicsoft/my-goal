import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';
@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {

    public username: string;
    public password: string;

    allUsersKey = "users";
    allUsers: Array<User>;
    user: User;

    constructor(private userService: UserService) {
        console.log('reading count at dashboard: ' + this.userService.getCount());

        this.user = userService.getLoggedInUser();

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
        else {
            Materialize.toast('Incorrect username or password', 3000)
        }
    }
}

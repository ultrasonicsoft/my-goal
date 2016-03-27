import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './app/login/login.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    public username: string;
    public password: string;

    allUsersKey = "users";
    allUsers: Array<User>;

    constructor(private userService: UserService, private _router: Router) {
        this.userService = userService;
        this.allUsers = JSON.parse(localStorage.getItem(this.allUsersKey));
        if (!this.allUsers) {
            this.allUsers = new Array<User>();
        }
    }
    login() {
        console.log('setting count from login...');
        this.userService.setCount(10);

        var user = this.allUsers.find(x => x.id === this.username && x.password === this.password);
        if (user) {
            Materialize.toast('Welcome ' + this.username, 3000)
            this.userService.setUserLoggedInStatus(true);
            this.userService.setLoggedInUser(user);
            this._router.navigate(['Dashboard']);
            // window.location.href = '/dashboard';
        }
        else {
            this.userService.setUserLoggedInStatus(false);
            this.userService.setLoggedInUser(null);
            Materialize.toast('Incorrect username or password', 3000)
        }
    }
}

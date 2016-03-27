import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';
import { Goal } from '../models/goal.model';
import { DaysLeftPipe } from '../pipes/daysLeft.pipe';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [DaysLeftPipe]
})
export class DashboardComponent {

    public username: string;
    public password: string;

    allUsersKey = "users";
    allUsers: Array<User>;
    user = new User();

    constructor(private userService: UserService) {
        console.log('reading count at dashboard: ' + this.userService.getCount());
        this.user.goals = new Array<Goal>();
    }

    ngAfterViewInit() {
        this.allUsers = JSON.parse(localStorage.getItem(this.allUsersKey));
        var user = this.userService.getLoggedInUser();
        this.user = this.allUsers.find(x => x.id === user.id);
        console.log('goals: ' + JSON.stringify(this.user.goals));
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

    deleteAllGoals() {
        this.user.goals = new Array<Goal>();
        var user = this.allUsers.find(x => x.id === this.user.id);
        var index = this.allUsers.indexOf(user)
        this.allUsers[index].goals = new Array<Goal>();
        localStorage.setItem(this.allUsersKey, JSON.stringify(this.allUsers));
    }
}

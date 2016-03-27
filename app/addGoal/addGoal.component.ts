///<reference path="../../typings/jquery/jquery.d.ts" />

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {User} from '../models/user.model';

@Component({
    selector: 'addGoal',
    templateUrl: './app/addGoal/addGoal.html',
})
export class AddGoalComponent {
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
    ngAfterViewInit() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    }

    
}

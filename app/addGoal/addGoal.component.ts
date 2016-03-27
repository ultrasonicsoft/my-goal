///<reference path="../../typings/jquery/jquery.d.ts" />

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';
import { Goal } from '../models/goal.model';

@Component({
    selector: 'addGoal',
    templateUrl: './app/addGoal/addGoal.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AddGoalComponent {
    public username: string;
    public password: string;

    allUsersKey = "users";
    allUsers: Array<User>;
    hasStartDate = true;
    user: User;

    goalName: string;
    startDate: Date;
    endDate: Date;

    constructor(private userService: UserService) {
        this.allUsers = JSON.parse(localStorage.getItem(this.allUsersKey));
        if (!this.allUsers) {
            this.allUsers = new Array<User>();
        }
    }
    ngAfterViewInit() {
        this.user = this.userService.getLoggedInUser();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    }

    addNewGoal() {
        var startDateValue = $('#startDatePicker').pickadate('picker').get();
        var endDateValue = $('#endDatePicker').pickadate('picker').get();

        console.log('goalName: ' + this.goalName);
        console.log('startDate: ' + startDateValue);
        console.log('endDate: ' + endDateValue);

        var newGoal = new Goal();
        newGoal.name = this.goalName;
        newGoal.startDate = startDateValue;
        newGoal.endDate = endDateValue;

        if (!this.user.goals) {
            this.user.goals = new Array<Goal>();
        }

        this.user.goals.push(newGoal);
        console.log(JSON.stringify(this.user.goals));

    }
}

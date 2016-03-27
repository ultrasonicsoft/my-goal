import {Component, Injectable} from 'angular2/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private isUserLoggedIn: boolean;
    private loggedInUser: User
    public count = 0;

    constructor() {
        this.loggedInUser = new User();
        console.log('service created...');
    }

    setCount(_count: number) {
        console.log('setting count: ' + _count);
        this.count = _count;
    }
    getCount(): number {
        return this.count;
    }

    setUserLoggedInStatus(status: boolean) {
        this.isUserLoggedIn = status;
    }

    setLoggedInUser(user: User) {
        if (!user) {
            this.loggedInUser = null;
        }
        else {
            this.loggedInUser.id = user.id;
            this.loggedInUser.password = user.password;
        }

    }

    getLoggedInUser(): User {
        return this.loggedInUser;
    }
}
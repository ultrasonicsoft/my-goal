import {Component} from 'angular2/core';
import {User} from '../models/user.model';

@Component({
    selector: 'sign-up',
    templateUrl: './app/signup/signup.html'
})
export class SignUpComponent {
    username: string;
    password: string;
    confirmPassword: string;

    allUsersKey = "users";
    allUsers: Array<User>;

    constructor() {
        this.allUsers = JSON.parse(localStorage.getItem(this.allUsersKey));
        if (!this.allUsers) {
            this.allUsers = new Array<User>();
        }
    }

    signup() {
        if (this.isUserNameTaken()) {
            Materialize.toast(this.username + ' user name already taken. Please try different one.!', 3000)
            return;
        }

        console.log('UserName: ' + this.username);
        console.log('password: ' + this.password);
        console.log('confirmPassword: ' + this.confirmPassword);

        if (this.password !== this.confirmPassword) {
            Materialize.toast('Password didn\'t match!', 3000)
            return;
        }

        var newUser = new User();

        newUser.id = this.username;
        newUser.password = this.password

        this.allUsers.push(newUser);

        localStorage.setItem(this.allUsersKey, JSON.stringify(this.allUsers));

    }

    isUserNameTaken() {
        var user = this.allUsers.find(x => x.id === this.username);
        if (user)
            return true;
        else
            return false;
    }
}

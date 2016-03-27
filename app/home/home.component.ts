import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../signup/signup.component';


@Component({
    selector: 'home',
    templateUrl: './app/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    {
        path: '/',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpComponent
    }
])
export class HomeComponent {

    constructor() {
    }

}
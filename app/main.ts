import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {HomeComponent} from './home/home.component';

var appPromise = bootstrap(HomeComponent, [ROUTER_PROVIDERS]);

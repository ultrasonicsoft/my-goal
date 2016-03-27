import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {HomeComponent} from './home/home.component';

// var appPromise = bootstrap(HomeComponent);

// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);


// bootstrap(HomeComponent, [ROUTER_PROVIDERS]);

var appPromise = bootstrap(HomeComponent, [ROUTER_PROVIDERS]);

// register LocalStorage, this registers our change-detection.
import {LocalStorageSubscriber} from './LocalStorageEmitter';
LocalStorageSubscriber(appPromise);
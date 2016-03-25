import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {HomeComponent} from './home/home.component';
// import {LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

// var appPromise = bootstrap(HomeComponent);

// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);


// bootstrap(HomeComponent, [ROUTER_PROVIDERS]);

bootstrap(HomeComponent, [ROUTER_PROVIDERS]);
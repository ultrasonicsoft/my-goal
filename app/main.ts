import {bootstrap}    from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import { UserService } from './services/user.service';

enableProdMode();

// var appPromise = bootstrap(HomeComponent, [ROUTER_PROVIDERS, UserService]);

bootstrap(HomeComponent, [
  ROUTER_PROVIDERS,UserService,
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy,
         {useClass: HashLocationStrategy}) // .../#/crisis-center/
]);
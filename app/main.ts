import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

var appPromise = bootstrap(AppComponent);

// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);
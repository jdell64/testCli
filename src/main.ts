import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { environment} from './app/';
import {DieRollerComponent} from './app/die-roller';

if (environment.production) {
  enableProdMode();
}

// bootstrap(TestCliAppComponent);
bootstrap(DieRollerComponent);

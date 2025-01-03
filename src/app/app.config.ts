import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: 
  [ provideHttpClient(),
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ] 
};

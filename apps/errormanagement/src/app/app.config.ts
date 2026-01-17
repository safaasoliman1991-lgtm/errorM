import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { environment } from '../environments/environment';
import {
  APP_CONFIG,
  LowerCaseUrlSerializer,
} from '@errormanagement/shared/util-config';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withXsrfConfiguration,
} from '@angular/common/http';
import { jwtInterceptor } from '@errormanagement/utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    { provide: APP_CONFIG, useValue: environment },
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    provideHttpClient(
      withFetch(),
      withInterceptors([jwtInterceptor]),
      withXsrfConfiguration({
        cookieName: '',
        headerName: '',
      }),
    ),
  ],
};

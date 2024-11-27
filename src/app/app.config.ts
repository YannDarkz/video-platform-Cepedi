import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideStore } from '@ngrx/store';
import { provideEffects, EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { videoReducer } from './store/reducers/video.reducer';
// import { reducers } from './store/reducers';
import { VideoEffects } from './store/effects/video.effects';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      videos: videoReducer,
    }),
    
    provideEffects([VideoEffects]),
    provideStoreDevtools(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-82ubfpsnq80d4hsz.us.auth0.com',
      clientId: '8SsJ8tuca9HvbhFqCC8l9oc0nwoupVeR',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};

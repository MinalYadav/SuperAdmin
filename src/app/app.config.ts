import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { customInterceptor } from './interceptors/custom.interceptor';
// import { AuthInterceptorService } from './services/auth-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // for routes
    provideRouter(routes),
    // providing httpClient
    provideHttpClient(withInterceptors([customInterceptor])), 
    // interseptor tocken setup
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService , multi: true
    // },
    
    ]
};

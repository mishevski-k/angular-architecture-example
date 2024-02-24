import {
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation, withInMemoryScrolling,
  withRouterConfig
} from "@angular/router";
import {provideAnimations} from "@angular/platform-browser/animations";
import {ENVIRONMENT_INITIALIZER} from "@angular/core";

export interface CoreOptions{
  routes: Routes; //possible to extend options with more props in the future
}

export function provideCore({ routes }: CoreOptions){
  return [
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({onSameUrlNavigation: 'reload'}),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    //other 3rd party libraries like NgRx, provideStore()

    //other application specific providers and setup

    //perform initialization, has to be last
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue(){
        //add init logic here...
        //kickstart processes, trigger initial request or actions ...
      },
    },
  ];
}

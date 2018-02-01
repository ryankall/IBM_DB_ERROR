import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';



import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'on the server' : 'in the browser';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

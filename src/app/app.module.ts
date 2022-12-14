import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteNavbarComponent } from './components/site-navbar/site-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

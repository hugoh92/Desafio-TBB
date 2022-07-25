import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { BodyMainComponent } from './body-main/body-main.component';
import { CardsProductsComponent } from './body-main/cards-products/cards-products.component';
import { CardsDiscoveriesComponent } from './body-main/cards-discoveries/cards-discoveries.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterMainComponent,
    HeaderMainComponent,
    BodyMainComponent,
    CardsProductsComponent,
    CardsDiscoveriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HomeModule } from './pages/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IntroduceComponent } from './pages/introduce/introduce.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    IntroduceComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SidebarModule,
    HomeModule
  ],
  exports: [SidebarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

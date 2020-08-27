import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, NavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

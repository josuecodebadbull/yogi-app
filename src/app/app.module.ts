import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ClassPricesComponent } from './class-prices/class-prices.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    ClassPricesComponent,
    HomeComponent,
    PracticeComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

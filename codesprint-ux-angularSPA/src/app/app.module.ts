import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VieworderpageComponent } from './vieworderpage/vieworderpage.component';
import { PlacegiftcardComponent } from './placegiftcard/placegiftcard.component';
import {HttpClientModule} from '@angular/common/http'
import { GiftcardService } from './service/giftcard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    VieworderpageComponent,
    PlacegiftcardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GiftcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

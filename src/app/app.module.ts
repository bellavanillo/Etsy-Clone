import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingsComponent } from './listings/listings.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AdminComponent,
    EditComponent,
    WelcomeComponent,
    ListingDetailComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

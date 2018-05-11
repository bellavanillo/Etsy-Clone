import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { ListingComponent } from './listing/listing.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AdminComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

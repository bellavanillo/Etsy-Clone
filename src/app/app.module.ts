import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ArtComponent } from './artandcollectibles/art.component';
import { ClothingComponent } from './clothingandshoes/clothing.component';
import { CraftComponent } from './craftsuppliesandtools/craft.component';
import { HomeComponent } from './homeandliving/home.component';
import { HomepageComponent } from './homepage/home-page.component';
import { JewelryComponent } from './jewelryandaccessories/jewelry.component';
import { ToyComponent } from './toysandentertainment/toy.component';
import { VintageComponent } from './vintage/vintage.component';
import { WeddingComponent } from './weddingandparty/wedding.component';




@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    ClothingComponent,
    CraftComponent,
    HomeComponent,
    HomepageComponent,
    JewelryComponent,
    ToyComponent,
    VintageComponent,
    WeddingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

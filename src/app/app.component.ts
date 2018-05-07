import { Component } from '@angular/core';
import { Art } from './models/art.model';
import { Clothing } from './models/clothing.model';
import { Craft } from './models/craft.model';
import { Home } from './models/home.model';
import { Homepage } from './models/home-page.model';
import { Jewelry } from './models/jewelry.model';
import { Toy } from './models/toy.model';
import { Vintage } from './models/vintage.model';
import { Wedding } from './models/wedding.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Etsy App';
  ArtAndCollectibles: Art [] = [
    new Art()
    new Art()
    new Art()
    new Art()
    new Art()
  ];

  selectedArt = null;
  

 }

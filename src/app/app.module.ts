import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheComponent } from './affichage/affiche/affiche.component';


@NgModule({
  declarations: [
    AppComponent,
    AfficheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheComponent } from './affichage/affiche/affiche.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddRecordsComponent } from './components/add-records/add-records.component';
import { NewRecordsComponent } from './components/new-records/new-records.component';
import { ModifyRecordsComponent } from './components/modify-records/modify-records.component';
import { DeleteRecordsComponent } from './components/delete-records/delete-records.component';
import { SearchRecordsComponent } from './components/search-records/search-records.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AfficheComponent,
    NavBarComponent,
    AddRecordsComponent,
    NewRecordsComponent,
    ModifyRecordsComponent,
    DeleteRecordsComponent,
    SearchRecordsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

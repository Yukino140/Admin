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
import { Page1Component } from './components/page1/page1.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


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
    HomeComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

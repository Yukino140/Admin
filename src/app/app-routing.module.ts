import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteRecordsComponent } from './components/delete-records/delete-records.component';
import { HomeComponent } from './components/home/home.component';
import { ModifyRecordsComponent } from './components/modify-records/modify-records.component';
import { NewRecordsComponent } from './components/new-records/new-records.component';
import { SearchRecordsComponent } from './components/search-records/search-records.component';

const routes: Routes = [
  {path:'Home',component: HomeComponent},
  {path: 'New Records', component:NewRecordsComponent},
  {path:'Modify Records', component:ModifyRecordsComponent},
  {path:'Delete Records', component:DeleteRecordsComponent},
  {path:'Search Records', component:SearchRecordsComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

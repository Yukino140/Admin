import { Component } from '@angular/core';
import { Dest } from './Models/dest';
import { ServService } from './Services/serv.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  k:string="";
  l:string="";
  control=false;
  onSubmit(f:NgForm){
    if((this.l=="admin")&&(this.k=="admin"))
    this.control=true;
  }
  title = 'Admin';
 
}

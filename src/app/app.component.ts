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
  title = 'Admin';
  p:Dest = new Dest(123,"tunis","src/image",true,100,true,new Date("15/12/2021"),"text","");
  constructor(private se:ServService){}
  onSubmit(f:NgForm){
    this.se.addVoyage(this.p);
  }
  categories:string[] =["Domestic tourism","Buisiness tourism","Adventure tourism","Wildlife tourism"];
   sk:number =0;
  onReset(f:NgForm){
    this.se.deleteVoyage(this.sk);
  }
}

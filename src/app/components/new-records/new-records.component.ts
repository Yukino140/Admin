import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dest } from 'src/app/Models/dest';
import { ServService } from 'src/app/Services/serv.service';

@Component({
  selector: 'app-new-records',
  templateUrl: './new-records.component.html',
  styleUrls: ['./new-records.component.css']
})
export class NewRecordsComponent implements OnInit {

  p:Dest = new Dest(123,"tunis","src/image",true,100,true,new Date("15/12/2021"),"text","Beaches");
  constructor(private se:ServService){}
  onSubmit(f:NgForm){
    this.se.addVoyage(this.p);
  }
  categories:string[] =["Nature and Outdoor Activities","Culture","Gastronomy","Beaches"];
   

  ngOnInit(): void {
  }

}

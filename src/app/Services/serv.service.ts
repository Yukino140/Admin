import { Injectable } from '@angular/core';
import { Dest } from '../Models/dest';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  destination:Dest[]=[];
  getProduit(){
    return this.destination
  }
   addVoyage(pdt:Dest){
     console.log(pdt);
    let p1= Object.assign({},pdt);

    this.destination.push(p1);
    
  };
  deleteVoyage(id:number){
    for(var i=0;i<=this.destination.length;i++){
      if(this.destination[i].id==id)
      this.destination.splice(i,1);
    }
  }
  
  constructor() { }
}

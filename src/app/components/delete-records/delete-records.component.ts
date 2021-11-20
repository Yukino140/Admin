import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServService } from 'src/app/Services/serv.service';

@Component({
  selector: 'app-delete-records',
  templateUrl: './delete-records.component.html',
  styleUrls: ['./delete-records.component.css']
})
export class DeleteRecordsComponent implements OnInit {

  constructor(private se:ServService) { }
  sk:number =0;
  onReset(f:NgForm){
    this.se.deleteVoyage(this.sk);
  }
  ngOnInit(): void {
  }

}

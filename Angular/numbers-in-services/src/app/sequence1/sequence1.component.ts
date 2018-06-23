import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sequence1',
  templateUrl: './sequence1.component.html',
  styleUrls: ['./sequence1.component.css']
})
export class Sequence1Component implements OnInit {

  seq1: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  genSeq1(){
  this.seq1 = this._dataService.receiveSeq1();
  console.log(`in seq1 ${this.seq1}`);
  }

}

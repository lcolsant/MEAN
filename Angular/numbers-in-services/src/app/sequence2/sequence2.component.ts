import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sequence2',
  templateUrl: './sequence2.component.html',
  styleUrls: ['./sequence2.component.css']
})
export class Sequence2Component implements OnInit {

  seq2: number[] = [];


  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  genSeq2(){
    this.seq2 = this._dataService.receiveSeq2();
    console.log(`in seq2 ${this.seq2}`);
  }

}

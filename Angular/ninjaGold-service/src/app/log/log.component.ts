import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  log:String[] = [];

  constructor(private _dataService: DataService) { }

  //subscribe to log history observable. Receives new activities when event occurs
  ngOnInit() {
    this._dataService.history.subscribe(
      (data) => {this.log = data;}
    );
  }

}

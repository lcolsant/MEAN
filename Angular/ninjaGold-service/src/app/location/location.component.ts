import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  //triggered from button click. Passes building visited to service function
  //ninjaGold to determine winnings
  getGold(building:string){
      console.log(`${building} visited.`)
      this._dataService.ninjaGold(building);
    }

}

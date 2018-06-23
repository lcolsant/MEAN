import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create history observable to send updates on activities to the child component
  totalGold: BehaviorSubject<any[]> = new BehaviorSubject([]);
  history: BehaviorSubject<any[]> = new BehaviorSubject([]);

  gold:number = 0;
  log:String[] = [];

  constructor() { }

  //total Gold observable function
  updateTotalGold(newData: any): void{
    this.totalGold.next(newData);
  }

  //history observable function
  updateLog(newData: any): void{
    this.history.next(newData);
  }

  //ninjaGold function utilizes Math.floor(Math.random() * (max - min + 1)) + min; this determines
  //random integer within a specified range
  ninjaGold(building:string):number{
    let newGold:number =0;

    if(building=="farm"){
      newGold=Math.floor(Math.random()*4)+2;
    }else if(building=="cave"){
      newGold=Math.floor(Math.random()*6)+5;
    }else if(building=='casino'){
      newGold=Math.floor(Math.random()*201)-100;
    }else{
      newGold=Math.floor(Math.random()*9)+7;
    }

    //increment total gold total
    this.gold = this.gold + newGold;

    //push activity to log array
    if(newGold>=0){
      this.log.push(`You've earned ${newGold} gold at the ${building}.`);
    }else{
      this.log.push(`You've lost ${newGold} gold at the ${building}.`);
    }

    console.log(`newgold: ${newGold}`);
    console.log(`totalgold: ${this.gold}`);

    //update observable function to send totalGold count to app component
    this.updateTotalGold(this.gold);

    //update observable function to send log activity to log components
    this.updateLog(this.log);

    return this.gold;
  }

}

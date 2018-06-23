import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  randNum: number;
  numbers1: number[] = [];
  numbers2: number[] = [];

  constructor() { }

  //generate random integer between 1-10
  genRand():number{
    this.randNum = Math.floor(Math.random() * 10) + 1;
    console.log(`rand num: ${this.randNum}`)
    return this.randNum;
  }

  //receives a rand number, pushes to local numbers1 array and returns the array
  receiveSeq1():number[] {
    this.randNum = this.genRand();
    this.numbers1.push(this.randNum);
    return this.numbers1;
  }

  //receives a rand number, pushes to local numbers2 array and returns the array
  receiveSeq2():number[] {
    this.randNum = this.genRand();
    this.numbers2.push(this.randNum);
    return this.numbers2;
  }
  //loops through both numbers arrays and stores the sum.  The two sums are subtracted and returned.
  subtractSeq(): number{
    let sum1:number = 0;
    let sum2:number = 0;

    for(let i=0; i<this.numbers1.length; i++){
      sum1 = sum1 + this.numbers1[i]
    }

    for(let i=0; i<this.numbers2.length; i++){
      sum2 = sum2 + this.numbers2[i]
    }

    return sum1 - sum2;
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  newPlayer:Player = new Player();

  players:Array<Player> = [
    {
      _id:"1",
      name:"Neymar",
      position:"forward",
      statusGameOne:"playing",
      statusGameTwo:"playing",
      statusGameThree:"not playing",
    },
    {
      _id:"2",
      name:"Coutinho",
      position:"mid-fielder",
      statusGameOne:"playing",
      statusGameTwo:"undecided",
      statusGameThree:"playing",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onAdd(event, formData:NgForm){

    event.preventDefault;
    //add to db here

    this.players.push(this.newPlayer);
    console.log('successfully added player:', this.newPlayer);
    this.newPlayer = new Player();

    formData.reset();
  }

}

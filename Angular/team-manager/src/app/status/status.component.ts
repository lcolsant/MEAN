import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  gameId:string = "1";

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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}

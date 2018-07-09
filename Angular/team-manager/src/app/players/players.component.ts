import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

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

  constructor(private playerService: PlayerService ) { }

  ngOnInit() {
  }


  onDelete(player:Player){
    console.log('deleting player', player);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';
import { TitleizePipe } from '../titleize.pipe';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[TitleizePipe],

})
export class StatusComponent implements OnInit, OnDestroy {

  sub:Subscription;
  gameId:string;

  players:Array<Player> = []
  player:Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private titleize: TitleizePipe,
  ) {
    this.sub = this.route.paramMap.subscribe( params => {
      this.gameId = params.get('id');
      console.log('Showing status for game', this.gameId);
    })
  }

  ngOnInit() {

    this.sub = this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      this.players.forEach(player => {
        player.name = this.titleize.transform(player.name);
        player.position = this.titleize.transform(player.position);
      });
    });
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  setGameStatus(playerID:string, status:string){

    this.sub = this.playerService.getPlayer(playerID).subscribe(player =>{
      console.log(`From API...player ${player.name} retrieved from db.`);
      this.player = player;

      if(this.gameId == "1"){
        this.player.statusGameOne = status;
        console.log('player status changed for game 1', status);
      }else if(this.gameId == "2"){
        this.player.statusGameTwo = status;
        console.log('player status changed for game 2', status);
      }else if(this.gameId == "3"){
        this.player.statusGameThree = status;
        console.log('player status changed for game 3', status);
      }else{
        console.log('game id not found');
        throw error;
      }

      this.playerService.updatePlayer(playerID, this.player).subscribe(player => {
        console.log(`From API...player ${player.name} status has been updated to ${status} for game ${this.gameId}`);
      });

      this.playerService.getPlayers().subscribe(players => {
        this.players = players;
      });

    })

  }

}

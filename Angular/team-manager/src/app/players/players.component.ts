import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { TitleizePipe } from '../titleize.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers:[TitleizePipe],
})
export class PlayersComponent implements OnInit, OnDestroy {

  players:Array<Player> = []
  sub: Subscription;

  constructor(
    private playerService: PlayerService,
    private titleize: TitleizePipe,

  ) { }

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


  onDelete(playerToDelete:Player){
    console.log(playerToDelete);
    this.sub = this.playerService.deletePlayer(playerToDelete).subscribe(deletedPlayer => {
      console.log('removed player:', deletedPlayer);
      this.players = this.players.filter(player => player._id !== deletedPlayer._id);
    });
  }

}

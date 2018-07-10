import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit, OnDestroy {

  sub:Subscription;
  newPlayer:Player = new Player();
  players:Array<Player> = []

  constructor(
    private playerService:PlayerService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  onAdd(event){

    event.preventDefault;

    this.sub = this.playerService.addPlayer(this.newPlayer).subscribe(player=>{
      console.log('player from api:', player);
      this.router.navigateByUrl('/');
    });
  }

}

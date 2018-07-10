import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StatusComponent } from './status/status.component';


// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'players/list' },
//   { path: 'players', redirectTo: 'players/list' },
//   { path: 'players/list', component: PlayersComponent },
//   { path: 'players/addplayer', component: AddPlayerComponent },
//   { path: 'status', redirectTo: 'status/game/1' },
//   { path: 'status/game/:id', component: StatusComponent },
// ];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'players',
    children: [
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: PlayersComponent,
      },
      {
        path: 'addplayer',
        component: AddPlayerComponent,
      },
    ],
  },
  { path: 'status',
    children: [
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'game/1',
      },
      {
        path: 'game/:id',
        component: StatusComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { AddPlayerComponent } from './add-player/add-player.component';

import { PlayerService } from './player.service';

import { TitleizePipe } from './titleize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    AddPlayerComponent,
    TitleizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private base = '/api/players'

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.base);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.base}/${id}`);
  }

  addPlayer(player:Player): Observable<Player>{
    return this.http.post<Player>(this.base, player);
  }

  updatePlayer(id:string, player:Player): Observable<Player>{
    return this.http.put<Player>(`${this.base}/${id}`, player);
  }

  deletePlayer(player: Player): Observable<Player> {
    return this.http.delete<Player>(`${this.base}/${player._id}`);
  }

}
